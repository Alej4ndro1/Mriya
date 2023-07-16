import { client } from '../utils/fetchDreams';
import { Dream } from '../types/Dream';
import { City } from '../types/City';

export const getDreams = () => {
  return client.get<Dream[]>('/api/dream/all');
};

export const getDreamID = (dreamId: number) => {
  return client.get<Dream[]>(`/dreamId=${dreamId}`);
};

export const getCitys = () => {
  return client.get<City[]>('/api/city');
};

export const getFilteredDreams = () => {
  return client.get<Dream[]>('/api/dream/all?count=9&page=0&cities=6');
};
