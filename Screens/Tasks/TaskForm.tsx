import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Switch } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import CustomButton from '../../Components/Buttons/CustomButton';
import Calendar from '../../Components/Calendar/Main';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTask } from '../../actions/Tasks/action';
import { IApplicationState } from '../../store/state';
import { IEventData } from '../../utils/db';

const TaskFormScreen = (props: any) => {
  const [formData, setFormData] = React.useState<IEventData>({
      title: "",
      description: "",
      start: "",
      end:  "",
      color: "",
      allDayRepeat: false,
      repeatType: 0,
      lat: 125.50,
      lng: 125.50,
    })
  const onChangeHandler = (name: string, value: any) => {
      setFormData({
          ...formData,
          [name]: value
      })
  }

  
  const dispatch = useDispatch();
  const tasks = useSelector((state: IApplicationState) => state.tasks)
  const onOk = () => {
      const data: any = formData;
      data.allDayRepeat = formData.allDayRepeat ? 1 : 0;
    dispatch(createNewTask(data, () => {
        props.navigation.navigate("Tasks")
    }))
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
                    <Text style={styles.label}>همه روزه</Text>
                    <Switch 
                    value={formData.allDayRepeat}
                    onValueChange={(value) => {
                        onChangeHandler("allDayRepeat", value)
                    }}/>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>تاریخ شروع</Text>
                    <Calendar
                    onChange={(value) => {
                      onChangeHandler("start", value.date.toISOString()) }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>تاریخ پایان</Text>
                    <Calendar
                    onChange={(value) => {
                      onChangeHandler("end", value.date.toISOString()) }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>تکرار</Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={""+formData.repeatType}
                    returnKeyType= "next" 
                    onChange={(value) => {
                      onChangeHandler("repeatType", value) }} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}> رنگ </Text>
                    <TextInput 
                    style={styles.txtInput} 
                    value={formData.color}
                    returnKeyType= "next" 
                    onChangeText={(value) => onChangeHandler("color", value)} />
                </View>
                <View style={{width: "70%"}}>
                    {tasks.loading ? <ActivityIndicator color="blue" /> : 
                    <CustomButton onPress={onOk}>ثبت</CustomButton>}
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