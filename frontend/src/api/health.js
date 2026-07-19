import api from "./api";

export async function calculateHealth(meal, gender = "male") {
  const response = await api.post("/health/score", {
    gender,
    foods: meal,
  });

  return response.data;
}