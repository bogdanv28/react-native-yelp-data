import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { elevation } from '../common/styles';
import { NavigationParams, NavigationRoute, NavigationScreenProp, withNavigation } from 'react-navigation';

type RestaurantItemProps = {
  id: string;
  name: string;
  imageUrl: string;
  rating: string;
  price: string;
  isClosed: boolean;
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
};

const RestaurantItem: FC<RestaurantItemProps> = ({ id, name, imageUrl, rating, price, isClosed, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { id })}>
      <View style={[styles.elevation, styles.container]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          {isClosed && (
            <View>
              <Text style={{ color: 'red' }}>Is closed</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: 'white',
    height: 100,
    alignSelf: 'stretch',
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: 'gold',
  },
});

export default withNavigation(RestaurantItem);
