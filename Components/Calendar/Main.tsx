import * as React from 'react';
import { View, Text, StyleSheet, Button, Modal, FlatList, TouchableOpacity } from 'react-native';
import GeoCalendar from './Georgian/Calendar';
import PersianCalendar from './Persian/Clanedar';
import NDate from '@nepo/ndate';
import { APP_CONST } from '../../utils/constants/AppConst';

interface IProps {
    initialValue?: Date;
    onChange: (value: NDate) => void;
}
const Calendar = (props: IProps) => {
    const theDate = props.initialValue ? props.initialValue : new Date()
    const [calendarVisible, setVisibel] = React.useState<boolean>(false);
    const [calendarType, setCalendarType] = React.useState<string>("persian");
    const [dateTimeValue, setDateTimeValue] = React.useState<Date>(theDate)
    const [choosenDate, setchoosenDate] = React.useState<NDate>()

    let ChoosenDateText = "";
    if(calendarType === "persian" && choosenDate){
        ChoosenDateText = choosenDate.formatJalali("YYYY/MM/DD")
    }
    if(calendarType === "gregorian" && choosenDate){
        choosenDate.format("YYYY/MM/DD")
    } 
    return (
        <View style={styles.calendarContainer}>
        <TouchableOpacity
        activeOpacity={0.9}
         onPress={()=> setVisibel(true)}><Text style={styles.valueText}> 
        {ChoosenDateText} </Text></TouchableOpacity>
            <Modal transparent={true}
                animationType="fade"
                visible={calendarVisible}>
                <TouchableOpacity 
                activeOpacity={1} 
                style={styles.touchContainer} 
                onPress={() => {
                    setVisibel(false)
                }}>

                    <View style={styles.container}>
                        <View style={styles.calendarView}>
                            {calendarType === "persian" ? (
                                <PersianCalendar {...props}
                                    onChange={(value) => {
                                        setchoosenDate(value)
                                        if (props.onChange) {
                                            props.onChange(value)
                                        }
                                        setVisibel(false)
                                    }}
                                    mainDate={dateTimeValue} />
                            ) : (
                                    <GeoCalendar {...props} />
                                )}
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    touchContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    calendarView: {
        width: "80%",
        maxWidth: 350,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20
    },
    calendarContainer: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: APP_CONST.colors.primary,
        paddingVertical: 3,
        marginVertical: 10
    },
    valueText: {
        fontFamily: "shabnam",
    },
});

export default Calendar