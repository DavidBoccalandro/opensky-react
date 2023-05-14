/* eslint-disable no-param-reassign */
import axios, { AxiosError } from 'axios';
import { ApiError, ApiSuccess } from 'types/api.types';
import { LocalStorage } from 'utils/LocalStorage';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = LocalStorage.jwt;
    return config;
  },
  (error) => Promise.reject(error)
);

export const apiProtectedPost = async <D, R>(url: string, data: D): Promise<ApiError | ApiSuccess<R>> => {
  try {
    const response = await axiosInstance.post<R>(url, data, { validateStatus: (status) => status !== 401 });
    return { data: response.data };
  } catch (error) {
    return { error: (error as AxiosError).message };
  }
};

export const apiGet = async <R>(url: string): Promise<ApiError | ApiSuccess<R>> => {
  try {
    const response = await axiosInstance.get<R>(url, { validateStatus: (status) => status !== 401 });
    return { data: response.data };
  } catch (error) {
    return { error: (error as AxiosError).message };
  }
};
