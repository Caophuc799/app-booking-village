import { fetchService } from './FetchService';

export const villageApi = {
  getList: () => {
    return fetchService.get('/villages');
  },
};
