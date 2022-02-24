import axios, { AxiosError } from 'axios';

const interceptors: Record<string, number> = {};

const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || 'http://ec2-54-72-120-181.eu-west-1.compute.amazonaws.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const deleteAxiosHeader = (header: string) => {
  console.log(instance.interceptors.request);
  instance.interceptors.request.eject(interceptors[header]);
  delete interceptors[header];
};

export const setAxiosHeader = (header: string, value: string | undefined) => {
  if (interceptors[header]) {
    deleteAxiosHeader(header);
  }

  if (value) {
    interceptors[header] = instance.interceptors.request.use((config) => {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers[header] = value;
      return config;
    });
  } else {
    deleteAxiosHeader(header);
  }
};

export const isAxiosError = (error: Error | unknown): error is AxiosError => {
  return (<AxiosError>error).isAxiosError;
};

export default instance;
