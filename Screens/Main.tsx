import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/state';


const MainPage = () => {

    const auth = useSelector((state:IApplicationState) => state.auth.isAuth)
    return (
        <View>
            <Text> Main Page </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default MainPage