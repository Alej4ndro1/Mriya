import { client } from '../src/utils/fetchClient';
import { Dream } from '../src/types/Dream';

export const getDreams = () => {
  return client.get<Dream[]>('/api/dream/all');
};

export const getDreamById = (id: string) => {
  return client.get<Dream>(`/api/dream/?id=${id}`);
};