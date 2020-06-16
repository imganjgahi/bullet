import * as React from 'react';
import { View, Text, StyleSheet, Button, Modal, FlatList, TouchableOpacity } from 'react-native';

interface IProps {
    visible: boolean;
    onClose: () => void;
}
const PersianCalendar = (props: IProps) => {

    const dayName = [
        { id: "1", title: "ش" },
        { id: "2", title: "ی" },
        { id: "3", title: "د" },
        { id: "4", title: "س" },
        { id: "5", title: "چ" },
        { id: "6", title: "پ" },
        { id: "7", title: "ج" },
    ]
    const days = [
        { id: "1", num: 1 },
        { id: "2", num: 2 },
        { id: "3", num: 3 },
        { id: "4", num: 4 },
        { id: "5", num: 5 },
        { id: "6", num: 6 },
        { id: "7", num: 7 },
        { id: "8", num: 8 },
        { id: "9", num: 9 },
        { id: "10", num: 10 },
    ]
    if (!props.visible) {
        return null
    }
    return (
        <React.Fragment>
             <View style={styles.header}>
                        <Text style={styles.headerText}> Header </Text>
                        <View style={styles.nextBeforeRow}>
                        <TouchableOpacity style={{...styles.monthHandlerBtn, ...styles.PrevBtn}}>
                                <Text> {"<<"} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.monthHandlerBtn, ...styles.nextBtn}}>
                                <Text> {">>"} </Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={styles.daysContainer}>
                        {dayName.map(dayName => {
                            return (
                                <Text key={"name" + dayName.id} style={styles.cols}> {dayName.title} </Text>
                            )
                        })}
                        {days.map(day => {
                            return (
                                <Text key={day.id} style={styles.cols}> {day.num} </Text>
                            )
                        })}
                    </View>  
        </React.Fragment>
     )
}


const styles = StyleSheet.create({
    
    header: {
        height: 120,
        backgroundColor: "royalblue",
        alignItems: "center",
        paddingTop: 15,
        justifyContent: "space-between",
    },
    headerText: {
        color: "#fff",

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
    daysContainer: {
        width: "100%",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
    },
    cols: {
        width: 100 / 7 + "%",
        height: 40,
        textAlign: "center"
    }
});

export default PersianCalendar