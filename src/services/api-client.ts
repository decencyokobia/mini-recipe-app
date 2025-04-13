import axios, {CanceledError} from "axios";
export const apiKey = '33b6917cedfa47f6ba02a96d27cd3548'

export default axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`
})

export {CanceledError};