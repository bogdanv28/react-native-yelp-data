import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
import { StatusBar } from 'expo-status-bar';

const commonCategories = [
  {
    title: 'Burgers',
    imageSource: require('../assets/images/burger.png'),
  },
  {
    title: 'Pizza',
    imageSource: require('../assets/images/pizza.png'),
  },
  {
    title: 'Pasta',
    imageSource: require('../assets/images/pasta.png'),
  },
  {
    title: 'Steaks',
    imageSource: require('../assets/images/steak.png'),
  },
  {
    title: 'Deserts',
    imageSource: require('../assets/images/cake.png'),
  },
  {
    title: 'Smoothie',
    imageSource: require('../assets/images/smoothies.png'),
  },
];

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>(commonCategories[0].title);

  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <View>
        <Categories categories={commonCategories} setCategory={setSearchTerm} />
      </View>
      <Restaurants searchTerm={searchTerm} />
    </SafeAreaView>
  );
};

export default HomeScreen;
