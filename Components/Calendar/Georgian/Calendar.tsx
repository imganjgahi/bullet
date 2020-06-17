import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { dayName } from './utils';

interface IProps {
    
}
const GeoCalendar = (props: IProps) => {

    
    
    return (
        <React.Fragment>
            <View style={styles.header}>
                <Text style={styles.headerText}> Header </Text>
                <View style={styles.nextBeforeRow}>
                    <TouchableOpacity style={{ ...styles.monthHandlerBtn, ...styles.PrevBtn }}>
                        <Text> {"<<"} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.monthHandlerBtn, ...styles.nextBtn }}>
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

export default GeoCalendar