import axios, { AxiosInstance } from 'axios';
import { NEXT_PUBLIC_BASE_API_URL } from '../utils/config';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_BASE_API_URL ,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
