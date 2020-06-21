import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { APP_CONST } from '../../../utils/constants/AppConst';


interface IProps {}

const DEVICE_WIDTH = Dimensions.get('window').width
const MonethGridHeader = (props: IProps) => {
   return (
      <View style={styles.container}>
         <Text style={styles.cols}> شنبه </Text>
         <Text style={styles.cols}> یکشنبه </Text>
         <Text style={styles.cols}> دوشنبه </Text>
         <Text style={styles.cols}> سه‌شنبه </Text>
         <Text style={styles.cols}> چهارشنبه </Text>
         <Text style={styles.cols}> پنج‌شنبه </Text>
         <Text style={styles.cols}> جمعه </Text>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
       width: DEVICE_WIDTH,
       backgroundColor: APP_CONST.colors.secondary,
       flexDirection: "row-reverse",
       alignItems: 'center',
       justifyContent: 'center',
       height: 50
   },
   cols: {
       fontSize: 11,
       width: DEVICE_WIDTH / 7,
       fontFamily: "shabnam-bold",
       textAlign: "center",
       color: "white"
   }
});


export default MonethGridHeader