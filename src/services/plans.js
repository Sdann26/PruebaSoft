import { API_URL } from '../environment';

export const getPlans = async () => {
  try {
    const response = await fetch(`${API_URL}/plans.json`);
    const data = await response.json();
    return data.list;
  } catch (err) {
    console.error('Error al obtener los planes:', err.message);
    return [];
  }
};
