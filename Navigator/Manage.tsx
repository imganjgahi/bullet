import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../Screens/Main';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/state';
import RegisterScreen from '../Screens/Auth/Register';
import LoginScreen from '../Screens/Auth/Login';
import { APP_CONST } from '../utils/constants/AppConst';
import StartupScreen from '../Screens/Startup';


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

    const auth = useSelector((state: IApplicationState) => state.auth.isAuth)

    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {
                fontFamily: "shabnam",
                color: APP_CONST.colors.primary,
                textAlign: "left"
            }
        }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                title: "Bullet"
            }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                title: "ثبت نام"
            }} />

        </Stack.Navigator>
    )
}
const MainNav = () => {
    
    const auth = useSelector((state: IApplicationState) => state.auth)
    return (
        <MainStack.Navigator>
            {!auth.authChecking && <MainStack.Screen name="Start" component={StartupStack} />}
            {!auth.isAuth && auth.authChecking && <MainStack.Screen name="Auth" component={AuthNav} />}
            {auth.isAuth && <MainStack.Screen name="Home" component={MainPage} options={{
                            title: "BULLET"
                        }} />}
        </MainStack.Navigator>
    )
}


export default MainNav