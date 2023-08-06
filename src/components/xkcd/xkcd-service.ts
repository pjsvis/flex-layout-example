import axios, { AxiosResponse } from 'axios';
import { Xkcd } from './xkcd-types';

/**
 * 
 * TODO: Get responmse
 */
export const getXkcdJson =  (id: number): any => {
  const url = `https://xkcd.com/${id}/info.0.json`;
  return axios(url);
};
