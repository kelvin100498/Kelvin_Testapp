import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import COLOR from './src/Config/color';
import Router from './router';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store/store';
import {navigationRef} from './src/Helper/navigate';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.yelow,
    background: COLOR.black,
    card: COLOR.black,
    text: 'white',
    border: COLOR.black,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={COLOR.black}
          translucent={false}
        />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
