import apiClient, { apiKey } from "./api-client";

interface Results {
    id: number;
    title: string;
    image: string;

    spoonacularSourceUrl
    : string;
}

export interface Result {
    results: Results[];
}


class HttpService {
    query: string;

    constructor (query: string) {
        this.query = query;
    }
    getRecipe() {
        const controller = new AbortController();

      const request =  apiClient.get<Result>(`complexSearch?query=${this.query}&addRecipeInformation=true&&apiKey=${apiKey}&includeNutrition=true`, {signal: controller.signal})

        return {request, cancel: () => controller.abort()}
    }
}

const create = (query: string) =>  new HttpService(query)

export default create;