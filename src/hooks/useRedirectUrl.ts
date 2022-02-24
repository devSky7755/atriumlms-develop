import { useQuery, UseQueryOptions } from 'react-query';

import { axios } from '../api';

type RedirectUrlData = {
  url: string;
};

const useRedirectUrl = (
  options?: UseQueryOptions<RedirectUrlData, unknown, RedirectUrlData, string[]>,
) => {
  return useQuery(
    ['redirectUrl'],
    async () => {
      const response = await axios.get(`/api/mobietrain/url`);
      return response.data;
    },
    options,
  );
};

export default useRedirectUrl;
