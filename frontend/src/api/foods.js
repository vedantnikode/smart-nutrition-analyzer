import api from "./api";

export const getFoods = async () => {
  const response = await api.get("/foods");
  return response.data;
};

export const searchFoods = async (query) => {
  const response = await api.get(`/foods/search?q=${query}`);
  return response.data;
};