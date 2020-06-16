import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { APP_CONST } from '../../../utils/constants/AppConst';
import { MONTH_NAMES } from "./utils";
interface IProps {
    nextMonth: () => void;
    prevMonth: () => void;
    showMonthBlock: () => void;
    showYearBlock: () => void;
    year: number;
    month: number;
}

const CalendarHeader = (props: IProps) => {
    return (
            <View style={styles.header}>
                    <Text style={styles.headerText}> 
                        {MONTH_NAMES[props.month - 1] +" "+ props.year}
                     </Text>
                    <View style={styles.nextBeforeRow}>
                    <TouchableOpacity style={{...styles.monthHandlerBtn, ...styles.PrevBtn}}
                    onPress={props.prevMonth}
                    >
                            <Text> {"<<"} </Text>
                        </TouchableOpacity>
                        <View style={styles.selected}>
                            <TouchableOpacity 
                            onPress={props.showMonthBlock}
                            ><Text style={styles.txt}>ماه </Text></TouchableOpacity>
                            <Text  style={styles.txt}> / </Text>
                            <TouchableOpacity 
                            onPress={props.showYearBlock}
                            ><Text style={styles.txt}> سال </Text></TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{...styles.monthHandlerBtn, ...styles.nextBtn}}
                        onPress={props.nextMonth}
                        >
                            <Text> {">>"} </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
     )
}


const styles = StyleSheet.create({
    
    header: {
        height: 180,
        backgroundColor: APP_CONST.colors.primary,
        alignItems: "center",
        paddingTop: 15,
        justifyContent: "space-between",
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "shabnam-bold"

    },
    nextBeforeRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    monthHandlerBtn: {
        backgroundColor: "#fff",
        width: 60,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    nextBtn: {
        borderTopLeftRadius: 20
    },
    PrevBtn: {
        borderTopRightRadius: 20
    },
    selected: {
        flexDirection: "row-reverse",
    },
    txt: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "shabnam"
    }
});

export default CalendarHeader