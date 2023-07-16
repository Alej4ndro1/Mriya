import { client } from '../utils/fetchDreams';
import { Dream } from '../types/Dream';
import { City } from '../types/City';

export const getDreams = (params: any = {}) => {
  const nextParams = new URLSearchParams();
  Object.keys(params).forEach((key: string) => {
    if (params[key] && params[key] !== '') {
      nextParams.append(key, params[key]);
    }
  });
  return client.get<Dream[]>(`/api/dream/all?${nextParams}`);
};

export const getDreamID = (dreamId: number) => {
  return client.get<Dream[]>(`/dreamId=${dreamId}`);
};

export const getCitys = () => {
  return client.get<City[]>('/api/city');
};
