import { API_URL } from '../environment';

export const getUser = async () => {
  try {
    const response = await fetch(`${API_URL}/user.json`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error al obtener el usuario:', err.message);
    return null;
  }
};
