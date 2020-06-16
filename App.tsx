import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from "react-redux";
import configureStore from "./store/configStore";

import {IApplicationState} from "./store/state"
import MainPage from './Screens/Main';
const initialState = {}
const store = configureStore(initialState);
export default function App() {
  return (
    <Provider store={store}><View style={styles.container}>
    <MainPage />
  </View></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
