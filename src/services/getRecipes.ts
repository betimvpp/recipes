import { Recipe } from "@/types/recipe";
import axios from "axios";

export async function getRecipes(): Promise<Recipe[]> {
    try {
        const response = await axios.get('http://localhost:4000/recipes');

        await new Promise((resolve) => setTimeout(resolve, 3000));

        return response.data;
    } catch (error) {
        console.error('Erro ao obter receitas:', error);
        return [];
    }
}