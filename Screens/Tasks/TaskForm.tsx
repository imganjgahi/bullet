import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import CustomButton from '../../Components/Buttons/CustomButton';
import Calendar from '../../Components/Calendar/Main';
import { ScrollView } from 'react-native-gesture-handler';



interface IFormData {
  title: string;
  description: string;
  status: string;
  startDate: Date;
  endDate: Date;
  label: string;
  categoryId: string;
}
const TaskFormScreen = (props: any) => {
  const [formData, setFormData] = React.useState<IFormData>({
      title: "",
      description: "",
      status: "",
      startDate: new Date(),
      endDate:  new Date(),
      label: "",
      categoryId: ""
    })
  const onChangeHandler = (name: string, value: any) => {
      setFormData({
          ...formData,
          [name]: value
      })
  }

  const onOk = () => {

  }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
            <View style={{width: "100%"}}>
            <Text style={{...styles.label, 
              fontSize: 21,
              textAlign: "right"}}> تعریف یک کار جدید </Text>
            </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>عنوان</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.title}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("title", value)} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>توضیحات</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.description}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("description", value)} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>تاریخ شروع</Text>
                    <Calendar
                    onChange={(value) => {
                      onChangeHandler("startDate", value.date) }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>تاریخ پایان</Text>
                    <Calendar
                    onChange={(value) => {
                      onChangeHandler("endDate", value.date) }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>زیر شاخه</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.categoryId}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("categoryId", value)} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}> برچسب </Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.label}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("label", value)} />
                </View>
                <View style={{width: "70%"}}>
                    <CustomButton onPress={onOk}>ثبت</CustomButton>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25
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
        color: APP_CONST.colors.secondary,
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
  
export default TaskFormScreen