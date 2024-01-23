import axios, {AxiosInstance} from 'axios';
import {millisecondsInMinute} from 'date-fns';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = millisecondsInMinute * 5;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
    });
  
    return api;
  };