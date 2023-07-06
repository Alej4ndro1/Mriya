import { Dream } from '../types/Dreams';
import { client } from '../utils/fetchDreams';

export const getPhones = () => {
  return client.get<Dream[]>('/api/dream');
};

export const getPhoneID = (phoneId: number) => {
  return client.get<Dream[]>(`/phones?phoneId=${phoneId}`);
};

