import * as React from 'react';
import { View, Text, StyleSheet, Button, Modal, FlatList, TouchableOpacity } from 'react-native';
import GeoCalendar from './Georgian/Calendar';
import PersianCalendar from './Persian/Clanedar';

interface IProps {
    visible: boolean;
    onClose: () => void;
}
const Calendar = (props: IProps) => {

    const [calendarType, setCalendarType] = React.useState<string>("persian")
    if (!props.visible) {
        return null
    }
    return (
        <Modal transparent={true} animationType="slide" visible={props.visible}>
            <View style={styles.container}>
                <View style={styles.calendarView}>
                {calendarType === "persian" ? (
                    <PersianCalendar {...props} />
                ) : (
                    <GeoCalendar {...props} />
                )}
                </View>
                <View style={styles.actions}>
                    <Button title="Close" onPress={props.onClose} />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    calendarView: {
        width: "90%",
        maxWidth: 350,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20
    },
    actions: {
        flex: 1,
        justifyContent: "flex-end",
    }
});

export default Calendar