import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, ImageURISource, GestureResponderEvent, TouchableOpacity } from 'react-native';
import { elevation } from '../common/styles';

type CategoryItemProps = {
  title: string;
  imageSource: ImageURISource;
  index: number;
  isActive: boolean;
  onTouch: ((event: GestureResponderEvent) => void) | undefined;
};

const CategoryItem: FC<CategoryItemProps> = ({ title, imageSource, index, isActive, onTouch }) => {
  return (
    <TouchableOpacity onPress={onTouch}>
      <View
        style={[
          styles.container,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          isActive ? { backgroundColor: 'rgb(241,186,87)' } : { backgroundColor: 'white' },
        ]}
      >
        <View style={[styles.imageContainer]}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    // backgroundColor: 'rgb(241,186,87)',
    backgroundColor: 'white',
    // marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    ...elevation,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default CategoryItem;
