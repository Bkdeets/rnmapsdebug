import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  
const Home = ({ navigation }) => {
	return (
        <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Error Demo'},
            {key: 'Tileset Download'}
          ]}
          renderItem={({item}) => <Button title={item.key} onPress={() => navigation.navigate(item.key)} />}
        />
      </View>
	);
};

export default Home;