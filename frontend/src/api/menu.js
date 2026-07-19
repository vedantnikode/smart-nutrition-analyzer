import api from "./api";

export const getMealMenu = async (day, meal) => {
  const response = await api.get(`/menu/${day}/${meal}`);
  return response.data;
};