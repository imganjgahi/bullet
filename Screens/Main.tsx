import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/state';
import Calendar from '../Components/Calendar/Main';
import RegisterScreen from './Auth/Register';


const MainPage = () => {

  const [calStatus, showCal] = React.useState<boolean>(false)
  const auth = useSelector((state: IApplicationState) => state.auth.isAuth)
  return (
    <View style={styles.container}>
          <Calendar visible={calStatus} onClose={() => showCal(false)} />
          <Text> Main Page </Text>
          <Button title="Calendar" onPress={() => showCal(true)} />
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