import { useState } from 'react';
import yelp from '../services/yelp';
import { RestaurantDetails } from '../common/types';

export default () => {
  const [result, setResult] = useState<{ data: RestaurantDetails | null; loading: boolean; error: any }>({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id: string) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`${id}`);
      setResult({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: error,
      });
    }
  };

  return { result, searchRestaurant };
};
