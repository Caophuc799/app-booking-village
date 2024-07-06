const BASE_URL = 'https://068cc26e-2824-4689-8116-7d66d25a94b6.mock.pstmn.io';

const FetchService = () => {
  const get = (url: string) => {
    const fullUrl = BASE_URL + url;
    return fetch(fullUrl);
  };

  return { get };
};

export const fetchService = FetchService();
