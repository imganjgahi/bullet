import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../Screens/Main';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/state';
import RegisterScreen from '../Screens/Auth/Register';
import LoginScreen from '../Screens/Auth/Login';
import { APP_CONST } from '../utils/constants/AppConst';


const Stack = createStackNavigator();

const MainNav = () => {

    const auth = useSelector((state: IApplicationState) => state.auth.isAuth)
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {
                fontFamily: "shabnam",
                color: APP_CONST.colors.primary
            }
        }}>
        {auth ? (
             <Stack.Screen name="BULLET" component={MainPage} />
        ) : (
            <React.Fragment>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                title: "ورود"
            }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                title: "ثبت نام"
            }} />
            </React.Fragment>
            )}
        
      </Stack.Navigator>
    )
}


export default MainNav