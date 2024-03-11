import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';

type SearchProps = {
  setSearchTerm: (input: string) => void;
};

const Search: FC<SearchProps> = ({ setSearchTerm }) => {
  const [input, setInput] = useState<string>('');

  const handleEndEditing = () => {
    if (!input) {
      return;
    }
    setSearchTerm(input);
  };

  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name='search' size={25} />
      <TextInput
        value={input}
        style={styles.input}
        placeholder='Restaurants, food...'
        onChangeText={setInput}
        onEndEditing={() => {
          handleEndEditing();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    ...elevation,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    color: 'grey',
  },
});

export default Search;
