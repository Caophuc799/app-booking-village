import { useQuery } from '@tanstack/react-query';
import { villageApi } from '../api';

const useVillages = () => {
  return useQuery({
    queryKey: ['currencies'],
    queryFn: () => villageApi.getList(),
    staleTime: Infinity,
  });
};

export default useVillages;
