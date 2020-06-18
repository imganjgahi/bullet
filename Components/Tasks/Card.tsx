import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APP_CONST } from '../../utils/constants/AppConst';
import PersianDate from '../Controllers/PersianDate';
import WrapperText from '../Controllers/WrapperText';
interface IProps {
    task: any
 }
const TaskCard = ({task}: IProps) => {
  return (<View style={styles.taskContainer}>
              <Text style={styles.taskTitle}> {task.title} </Text>
              <WrapperText style={styles.lead} max={80} text={task.description} />
              <View style={styles.datesContainer}>
              <Text style={styles.dates}>شروع: 
              <PersianDate date={task.startDate} />
              </Text>
              <Text style={styles.dates}>پایان: 
              <PersianDate date={task.endDate} />
              </Text>
              </View>
            </View>)
}


const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: APP_CONST.colors.lightBlue,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "white"
  },
  taskTitle : {
    fontFamily: "shabnam",
    textAlign: "right",
    direction: "rtl",
    paddingRight: 15
  },
  lead : {
    fontFamily: "shabnam",
    textAlign: "right",
    direction: "rtl",
    fontSize: 11,
    marginVertical: 5,

  },
  dates : {
    color: "white",
    fontFamily: "shabnam"
  },
  datesContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderBottomColor: APP_CONST.colors.lightBlue,
    backgroundColor: APP_CONST.colors.lightBlue,
  }
});

export default TaskCard