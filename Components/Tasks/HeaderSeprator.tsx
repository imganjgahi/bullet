import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import { Fontisto } from '@expo/vector-icons';

interface IProps {
    title: string
}

const HeaderSeprator = ({title}: IProps) => {
   return (
      <View style={styles.container}>
         <Text style={APP_CONST.txtLight}> {title} </Text>
         <View><Fontisto style={APP_CONST.icons} name="date" size={24} color="white" /></View>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
       flexDirection: "row",
       width: "100%",
       height: 50,
       backgroundColor: APP_CONST.colors.secondary,
       alignItems: "center",
       justifyContent: "flex-end",
       paddingHorizontal: 15
   }
});


export default HeaderSeprator