import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';

interface IProps {
    children?:any;
    title?:string;
    txtStyle?: any;
    style?:any;
    onPress: () => void;
}
const CustomButton = (props: IProps) => {

    const txtStyle = props.txtStyle ? {...props.txtStyle} : {}
    const viewStyle = props.style ? {...props.style} : {}
    return (
        <TouchableOpacity style={{...styles.container, ...viewStyle}} onPress={props.onPress}>
            <View>
            {props.title && <Text style={{...styles.txt, ...txtStyle}}> {props.title} </Text>}
            {props.children && <Text style={{...styles.txt, ...txtStyle}}> {props.children} </Text>}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: APP_CONST.colors.secondary,
      width: "100%",
      minHeight: 50,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    txt: {
        color: "white",
        fontFamily: "shabnam"
    }
  });
  
export default CustomButton