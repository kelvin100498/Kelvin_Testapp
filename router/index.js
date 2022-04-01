import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import screen
import Home from '../src/Screen/Home';
import DetailScreen from '../src/Screen/DetailScreen';
import EditContact from '../src/Screen/EditContact';
import AddContact from '../src/Screen/AddContact';

const Stack = createNativeStackNavigator();

//StackScreen
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
