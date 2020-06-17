import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { dayName } from "./utils";
import NDate from '@nepo/ndate';
interface IProps {
    daysObj: NDate[],
    onDaySelected: (day: NDate) => void
}
const DaysBlock = (props: IProps) => {

    return (
        
        <View style={styles.daysContainer}>
        {dayName.map(dayName => {
            return (
                <Text key={"name" + dayName.id} style={styles.cols}> {dayName.title} </Text>
            )
        })}
        {props.daysObj.map((dayInfo: any, i) => {
            if(!dayInfo){
                return <Text key={i} style={styles.cols}>  </Text>
            }
            return <View key={i} style={styles.cols}><TouchableOpacity onPress={() => props.onDaySelected(dayInfo)}>
                <Text style={styles.dayText}> {dayInfo.dayJalali} </Text>
                </TouchableOpacity>
                </View>
        })}
    </View> 
    )
}


const styles = StyleSheet.create({
    
    daysContainer: {
        width: "100%",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
    },
    cols: {
        width: 100 / 7 + "%",
        height: 40,
        textAlign: "center",
        fontFamily: "shabnam"
    },
    dayText: {
        textAlign: "center",
        fontFamily: "shabnam"
    }
});
  
export default DaysBlock