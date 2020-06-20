import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';

const android = "240762315648-7vl8p4k8qncf20bishvgbc0sls0eur1h.apps.googleusercontent.com"
const ios = "240762315648-8md8kfvocct9i7q7t2c3rjndsvveihjl.apps.googleusercontent.com"
// "com.nilistore.bullet"
interface IProps { }

const GCal = (props: IProps) => {

    const [cals, setCals] = React.useState<any[]>([])
    const getLogin = async () => {
        const  userAcc = await Google.logInAsync({ //{ type, accessToken, user }
            iosClientId: ios,
            androidClientId: android,
            scopes: ['https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/calendar']
          });
    
        if (userAcc.type === 'success') {
            console.log("USER: ", userAcc.accessToken);
            // Then you can use the Google REST API
            let userInfoResponse = await axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
                headers: { Authorization: `Bearer ${userAcc.accessToken}` },
            });
            if(userInfoResponse){
                const res = userInfoResponse
                console.log("Data: ", res.data.items)
                setCals(res.data.items)
            }else {
                console.log(userInfoResponse)
            }
        } else {
            console.log("USER not found");
            
        }
    }
    // React.useEffect(() => {},[
    //     getLogin()
    // ])
    return (
        <View style={styles.container}>
            <Text> AREF COMPONENT </Text>
            <Button title=" Login" onPress={() => {getLogin()}} />
            {cals.map(item => {
                return <Text key={item.id}> {item.summary} </Text>
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default GCal