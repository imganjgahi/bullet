import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { YEARS } from './utils';
import { APP_CONST } from '../../../utils/constants/AppConst';
import NDate from '@nepo/ndate';

interface IProps {
    currentYear: number
    onSelectYear: (month: number) => void;
}
const YearsBlock = (props: IProps) => {

    const mainYear = new NDate().yearJalali
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.yearsContainer}>
                {YEARS(mainYear).map((year, i) => (
                    <View style={{...styles.cols, 
                        backgroundColor: year === props.currentYear ? 
                        APP_CONST.colors.primary : "white"}} key={i}>
                        <TouchableOpacity
                            onPress={() => props.onSelectYear(year)}>
                            <Text style={{...styles.txt, 
                            color: year === props.currentYear ? 
                            "white" : "black"}} > {year} </Text>
                        </TouchableOpacity>
                    </View>
                ))}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 250
    },
    yearsContainer: {
        flex: 1,
        flexDirection: "row-reverse",
        flexWrap: "wrap",
    },
    cols: {
        width: "25%",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        fontFamily: "shabnam",
        textAlign: "center",
    }
});

export default YearsBlock