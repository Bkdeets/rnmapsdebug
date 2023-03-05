import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorDemo from "./ErrorDemo";
import TilesetDownload from './TilesetDownload';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Error Demo" component={ErrorDemo} />
        <Stack.Screen name="Tileset Download" component={TilesetDownload} />
      </Stack.Navigator>
    </NavigationContainer>
	);
};

export default App;
