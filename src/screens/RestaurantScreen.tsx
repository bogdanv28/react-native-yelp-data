import React, { FC, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import useRestaurant from '../hooks/useRestaurant';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';

type RestaurantScreenProps = {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
};

const RestaurantScreen: FC<RestaurantScreenProps> = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { result, searchRestaurant } = useRestaurant();
  const { data, error, loading } = result;

  const dimmensions = Dimensions.get('window');

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) {
    return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
  }

  if (error) {
    Alert.alert('Error getting restaurant details.');
    return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.container}>
      {data && (
        <>
          <Text style={styles.title}>{data.name}</Text>
          <Text>{data.rating}</Text>
          <Text>{data.review_count} reviews</Text>
          <FlatList
            data={data.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return (
                <Image
                  source={{ uri: item }}
                  style={{ width: dimmensions.width, height: 300, borderRadius: 10, marginBottom: 10 }}
                />
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default RestaurantScreen;
