import { useState } from 'react';
import yelp from '../services/yelp';
import { Restaurant } from '../common/types';

export default () => {
  const [results, setResults] = useState<{ data: Restaurant[] | null; loading: boolean; error: any }>({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term?: string) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get('/search', {
        params: { limit: 15, location: 'Seattle', term: term ?? 'Burgers' },
      });
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: error,
      });
    }
  };

  return { results, searchRestaurants };
};
