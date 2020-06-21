import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface IProps {}

const WeekScreen = (props: IProps) => {
   return (
      <View style={styles.screen}>
         <Text> Week Screen </Text>
      </View>
   )
}


const styles = StyleSheet.create({
   screen: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center'
   }
});


export default WeekScreen