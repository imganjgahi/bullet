import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { APP_CONST } from '../utils/constants/AppConst';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../actions/Auth/action';

interface IProps {
    navigation: any
}
const StartupScreen = (props: IProps) => {

    const dispatch = useDispatch();
    React.useEffect(() => {
        const checkforAuth = async () => {
            const isAuth = await AsyncStorage.getItem("bullet")
            if(isAuth){
                dispatch(AuthActions.setIsAuth(true))
                props.navigation.navigate("Home")
            } else {
                dispatch(AuthActions.setIsAuth(false))
                props.navigation.navigate("Auth")
            }
        }

        checkforAuth()
    })
    return (
        <View style={styles.container}>
            <ActivityIndicator color={APP_CONST.colors.lightRed} size="large" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#444",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default StartupScreen