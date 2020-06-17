import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from "react-redux";
import 'react-native-gesture-handler';
import configureStore from "./store/configStore";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './Navigator/Manage';
const initialState = {}
const store = configureStore(initialState);

const fetchFonts = () => {
  return Font.loadAsync({
    'shabnam': require("./assets/fonts/Shabnam.ttf"),
    'shabnam-bold': require("./assets/fonts/Shabnam-Bold.ttf")
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);


  if(!dataLoaded){
    return <AppLoading 
    startAsync={fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err)}
    />
  }

  return (
    <Provider store={store}><Navigator /></Provider>
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
