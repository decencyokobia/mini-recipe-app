import RecipeList from "./RecipeList";
import styles from "./RecipeList.module.css";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import useRecipe from "./hook/useRecipe";

function App() {
  const { darkMode, toggleMode } = useRecipe();

  return (
    <div className={darkMode ? styles.lightMode : styles.darkMode}>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Recipe Finder</h1>
        <div className="d-flex align-items-center gap-2">
          {darkMode ? (
            <FaToggleOff size={30} onClick={toggleMode} />
          ) : (
            <FaToggleOn size={30} onClick={toggleMode} />
          )}
          {darkMode ? (
            <span className={styles.toggleText}>Light Mode</span>
          ) : (
            <span className={styles.toggleText}>Dark Mode</span>
          )}
        </div>
      </div>
      <div
        className={
          darkMode
            ? styles.mainContainerLightMode
            : styles.mainContainerDarkMode
        }
      >
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
