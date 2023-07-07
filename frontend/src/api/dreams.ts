import { Dream } from '../types/Dreams';
import { client } from '../utils/fetchDreams';

export const getDreams = () => {
  return client.get<Dream[]>('/api/dream/all');
};

export const getDreamID = (dreamId: number) => {
  return client.get<Dream[]>(`/dreamId=${dreamId}`);
};

