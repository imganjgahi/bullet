import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {}
const AREF = (props: IProps) => {

    return (
        <View style={styles.container}>
            <Text> AREF COMPONENT </Text>
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
  
export default AREF