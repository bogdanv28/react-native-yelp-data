export type Restaurant = {
  id: string;
  name: string;
  image_url: string;
  rating: string;
  price: string;
  isClosed: boolean;
};

export type RestaurantDetails = Restaurant & {
  photos: string[];
  phone: string[];
  review_count: number;
};
