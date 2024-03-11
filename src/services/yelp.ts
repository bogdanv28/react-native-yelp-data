import axios from 'axios';

const BASE_URL = 'https://api.yelp.com/v3/businesses';
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_YELP_TOKEN}`,
  },
});
