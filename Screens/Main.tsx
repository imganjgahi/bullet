import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../store/state';
import Calendar from '../Components/Calendar/Main';
import RegisterScreen from './Auth/Register';
import { AuthActions } from '../actions/Auth/action';


const MainPage = (props: any) => {
  
  const auth = useSelector((state: IApplicationState) => state.auth.isAuth)
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
          <Calendar onChange={() => {}} />
          <Text> Main Page </Text>
          <Button title="Add New Task" onPress={() => props.navigation.navigate("TaskForm")} />
          <Button title="LOGOUT" color="gold" onPress={() => dispatch(AuthActions.logOutRequest())} />
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