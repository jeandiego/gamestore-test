import api from '../services/api';

export const getProducts = async () => {
  try {
    const response = await api.get('products');
    return response.data;
  } catch (error) {
    return [];
  }
};
