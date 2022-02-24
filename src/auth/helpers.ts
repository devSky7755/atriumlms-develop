import { deleteAxiosHeader, setAxiosHeader } from '../api';

export const setAxiosAuthorizationHeader = (token: string) => {
  setAxiosHeader('Authorization', `Bearer ${token}`);
};

export const deleteAxiosAuthorizationHeader = () => {
  deleteAxiosHeader('Authorization');
};
