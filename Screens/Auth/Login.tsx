import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import CustomButton from '../../Components/Buttons/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { AuthActions } from "../../actions/Auth/action"

interface IProps {
    navigation: any;
}
interface IFormData {
    email: string;
    password: string;
}
const LoginScreen = (props: IProps) => {
    const [formData, setFormData] = React.useState<IFormData>({
        email: "",
        password: ""
    })

    const onChangeHandler = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const dispatch = useDispatch()
    const LoginHandler = () => {

       dispatch(AuthActions.loginRequest(formData))
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>ایمیل</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.email}
                    keyboardType="email-address"
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("email", value)} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>رمز عبور</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.password}
                    secureTextEntry
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("password", value)} />
                </View>
                <View style={{width: "70%"}}>
                    <CustomButton onPress={LoginHandler}>ورود</CustomButton>
                    <TouchableOpacity style={styles.gotoLogin}
                    onPress={() => props.navigation.navigate("Register")}
                    ><Text style={styles.gotoLoginText}>
                    حساب ندارید؟ ثبت نام کنید
                    </Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 30
    },
    formContainer: {
        borderColor: "#ccc",
        borderWidth: 1,
        width: "80%",
        alignItems: "center"
    },
    formGroup: {
        width: "90%"
    },
    label: {
        marginBottom: 5,
        marginTop: 25,
        fontFamily: "shabnam-bold"
    },
    txtInput: {
        borderBottomWidth: 1,
        borderBottomColor: APP_CONST.colors.primary,
        width: "100%"
    },
    gotoLogin: {
        marginTop: 5,
        padding: 10

    },
    gotoLoginText: {
        fontFamily: "shabnam",
        textAlign: "center",
        color: APP_CONST.colors.darkRed
    }
  });
  
export default LoginScreen