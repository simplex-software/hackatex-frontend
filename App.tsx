import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store';
import MainStackNavigator from './src/navigation';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
