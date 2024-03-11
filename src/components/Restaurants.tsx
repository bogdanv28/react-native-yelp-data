import React, { FC, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, FlatList } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantItem from './RestaurantItem';

const Restaurants: FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const { results, searchRestaurants } = useRestaurants();
  const { data, loading, error } = results;

  useEffect(() => {
    searchRestaurants(searchTerm);
  }, [searchTerm]);

  if (loading) {
    return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
  }

  if (error) {
    Alert.alert('Error getting restaurants data.');
    return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return (
            <RestaurantItem
              id={item.id}
              name={item.name}
              imageUrl={item.image_url}
              rating={item.rating}
              price={item.price}
              isClosed={item.isClosed}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Restaurants;
