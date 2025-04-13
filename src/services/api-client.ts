import axios, {CanceledError} from "axios";
export const apiKey = import.meta.env.VITE_SPOONOCULAR_KEY;

export default axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`
})

export {CanceledError};