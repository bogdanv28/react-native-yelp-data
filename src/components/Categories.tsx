import React, { FC, useState } from 'react';
import { FlatList, ImageURISource, View } from 'react-native';
import CategoryItem from './CategoryItem';

type Category = {
  title: string;
  imageSource: ImageURISource;
};

type CategoriesProps = {
  categories: Category[];
  setCategory: (input: string) => void;
};

const Categories: FC<CategoriesProps> = ({ categories, setCategory }) => {
  const [active, setActive] = useState<number>(1);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem
            title={item.title}
            imageSource={item.imageSource}
            index={index}
            isActive={index === active}
            onTouch={() => {
              setCategory(item.title);
              setActive(index);
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(data) => data.title}
      />
    </View>
  );
};

export default Categories;
