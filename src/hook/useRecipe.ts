import { useState } from "react";
import { useForm } from "react-hook-form";
import { Result } from "../services/https-service";

const useRecipe = () => {
        const [query, setQuery] = useState("suya");
         const [recipes, setRecipes] = useState<Result>();
        const [error, setError] = useState<string>("");
        const [isLoading, setIsLoading] = useState(false);
        const { register, handleSubmit, reset } = useForm();
        const [darkMode, setDarkMode] = useState(false);


        const toggleMode = () => {
          setDarkMode(!darkMode)
        }

      return {query, recipes, error, isLoading,darkMode, toggleMode, register, handleSubmit, setIsLoading,setRecipes,setError, setQuery, reset}
}

export default useRecipe;