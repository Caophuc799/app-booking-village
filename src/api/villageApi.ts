import { fetchService } from './FetchService';

export const villageApi = {
  getList: () => {
    // return fetchService.get('/villages'); // Should call API in here
    return require('../mock/mockVillages.json')
  },
};
