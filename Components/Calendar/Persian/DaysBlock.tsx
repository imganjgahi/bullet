import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dayName } from "./utils";
import NDate from '@nepo/ndate';
interface IProps {
    daysObj: NDate[]
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
            return <Text key={i} style={styles.cols}> {dayInfo.dayJalali} </Text>
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
    }
});
  
export default DaysBlock