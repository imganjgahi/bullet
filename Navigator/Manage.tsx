import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../Screens/Main';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/state';
import RegisterScreen from '../Screens/Auth/Register';
import LoginScreen from '../Screens/Auth/Login';
import { APP_CONST } from '../utils/constants/AppConst';
import StartupScreen from '../Screens/Startup';
import { NavigationContainer } from '@react-navigation/native';


const MainStack = createStackNavigator();
const Startup = createStackNavigator();
const Stack = createStackNavigator();

const StartupStack = () => {
    return (
        <Startup.Navigator>
            <Startup.Screen name="Bullet" component={StartupScreen} />
        </Startup.Navigator>
    )
}

const AuthNav = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {
                fontFamily: "shabnam",
                color: APP_CONST.colors.primary,
                textAlign: "left"
            }
        }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                title: "ورود"
            }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                title: "ثبت نام"
            }} />

        </Stack.Navigator>
    )
}
const MainNav = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={MainPage} options={{
                            title: "BULLET"
                        }} />
        </MainStack.Navigator>
    )
}

const Navigator = () => {
    const auth = useSelector((state: IApplicationState) => state.auth)
    return (<NavigationContainer> 
            {!auth.authChecking && <StartupStack />}
            {!auth.isAuth && auth.authChecking && <AuthNav />}
            {auth.isAuth && <MainNav />}
         </NavigationContainer>)
}

export default Navigator