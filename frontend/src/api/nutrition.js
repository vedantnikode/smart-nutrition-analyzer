import api from "./api";

export async function calculateNutrition(meal, gender = "male") {
  const response = await api.post("/nutrition/calculate", {
    gender,
    foods: meal,
  });

  return response.data;
}