import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import CustomButton from '../../Components/Buttons/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from "../../actions/Auth/action"
import { IApplicationState } from '../../store/state';
interface IProps {
    navigation: any;
}
interface IFormData {
    name: string;
    email: string;
    password: string;
}
const RegisterScreen = (props: IProps) => {
    const [formData, setFormData] = React.useState<IFormData>({
        name: "",
        email: "",
        password: ""
    })
    const dispatch = useDispatch()

    const auth = useSelector((state:IApplicationState) => state.auth)
    const onChangeHandler = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const registerHandler = () => {
        dispatch(AuthActions.registerRequest(formData))
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>نام و نام خانوادگی</Text>
                    <TextInput 
                    accessibilityLabel="نام"
                    style={styles.txtInput} 
                    value={formData.name}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("name", value)} />
                </View>
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
                    {auth.authAction.loading ? (
                        <ActivityIndicator size="large" color={APP_CONST.colors.primary} />
                    ) : (
                    <CustomButton onPress={registerHandler}> ثبت نام </CustomButton>
                    )}
                    <TouchableOpacity style={styles.gotoLogin}
                    onPress={() => props.navigation.navigate("Login")}
                    ><Text style={styles.gotoLoginText}>
                    برو به صفحه ورود
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
  
export default RegisterScreen