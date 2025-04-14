import { useEffect } from "react";
import { CanceledError } from "axios";
import { FieldValues } from "react-hook-form";
import useRecipe from "./hook/useRecipe";
import create from "./services/https-service";
import styles from "./RecipeList.module.css";
import { IoSearch } from "react-icons/io5";

const RecipeList = () => {
  const {
    error,
    handleSubmit,
    isLoading,
    query,
    recipes,
    register,
    reset,
    setError,
    setIsLoading,
    setQuery,
    setRecipes,
  } = useRecipe();

  useEffect(() => {
    const { request, cancel } = create(query).getRecipe();

    setIsLoading(true);

    request
      .then((res) => {
        if (res.data.results.length === 0) alert(`${query} not found`);
        setRecipes(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });

    return cancel;
  }, [query]);

  const queryChange = (data: FieldValues) => {
    if (data.query.trim() === "") {
      alert("Input field empty, enter a valid recipe.");
      return;
    }
    setQuery(data.query);
    reset();
  };

  return (
    <>
      <form
        className="d-flex align-items-center mb-2"
        onSubmit={handleSubmit(queryChange)}
        style={{ position: "relative" }}
      >
        <input
          id="query"
          onKeyDown={(e) => e.key === "Enter" && queryChange}
          type="text"
          className="form-control pe-5"
          placeholder={`Enter recipe name e.g "pasta"`}
          {...register("query")}
        />

        <button
          type="submit"
          className={"btn btn-outline-secondary"}
          style={{ position: "absolute", right: 0 }}
        >
          <IoSearch size={20} />
        </button>
      </form>
      {isLoading && (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className={styles.gridContainer}>
        {recipes?.results.map((recipe) => (
          <figure key={recipe.id}>
            <a href={recipe.spoonacularSourceUrl}>
              {" "}
              <img
                key={recipe.title}
                src={recipe.image}
                alt={recipe.title}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </a>
            <figcaption key={recipe.id}>{recipe.title} </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
