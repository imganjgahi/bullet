import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { dayName, MONTH_DAYS } from "./utils";
import NDate from "@nepo/ndate";
import CalendarHeader from './Header';
interface IProps {
    visible: boolean;
    onClose: () => void;
    mainDate: Date;
}

const createMonth = (year: number, month: number) => {
    const cal = new NDate([year, month, 1])
    let currentSelectYear = year;
    let theDaysOfMonth = MONTH_DAYS[month -1];
    let dayOfWeek = cal.dayOfWeekJalali();
    if (theDaysOfMonth < 30) {
        if (NDate.isLeapYearJalali(year)) {
            theDaysOfMonth = 30;
        }
    }

    if (dayOfWeek < 0) {
        dayOfWeek = 6;
    }
    const totalDays = theDaysOfMonth + dayOfWeek;
    const daysArray = [];
    let day = 1;

    for (let i = 0; i < totalDays; i++) {
        if (i < dayOfWeek) {
            daysArray.push(null)
        } else if (i - dayOfWeek < theDaysOfMonth) {
            daysArray.push(new NDate([currentSelectYear, month, day]));
            day++;
        } else {
            daysArray.push(null)
        }
    }
    return daysArray;
};

const PersianCalendar = (props: IProps) => {

   const [daysObj, setDaysObj] = React.useState<any[]>([])
   const [referenceDate, setReferenceDate] = React.useState<NDate>(new NDate())

   React.useEffect(() => {
       const MainDate = new NDate(props.mainDate ? props.mainDate : new Date())
       setReferenceDate(MainDate)
       setDaysObj(createMonth(MainDate.yearJalali, MainDate.monthJalali))
   }, [])
    if (!props.visible) {
        return null
    }

    const nextMonthHandler = () => {
        const newDate = referenceDate
        let theYear = newDate.yearJalali
        let theMonth = newDate.monthJalali
        theMonth++
        if(theMonth === 13){
            theMonth = 1
            theYear++
        }
        setReferenceDate(new NDate([theYear, theMonth, 1]))
        setDaysObj(createMonth(theYear, theMonth))
    }
    const prevMonthHandler = () => {
        const newDate = referenceDate
        let theYear = newDate.yearJalali
        let theMonth = newDate.monthJalali
        theMonth--
        if(theMonth === 0){
            theMonth = 12
            theYear--
        }
        setReferenceDate(new NDate([theYear, theMonth, 1]))
        setDaysObj(createMonth(theYear, theMonth))
    }
    return (
        <React.Fragment>
                    <CalendarHeader 
                    year={referenceDate.yearJalali}
                    month= {referenceDate.monthJalali}
                    nextMonth={nextMonthHandler}
                    prevMonth={prevMonthHandler}
                    />
                    <View style={styles.daysContainer}>
                        {dayName.map(dayName => {
                            return (
                                <Text key={"name" + dayName.id} style={styles.cols}> {dayName.title} </Text>
                            )
                        })}
                        {daysObj.map((dayInfo: any, i) => {
                            if(!dayInfo){
                                return <Text key={i} style={styles.cols}>  </Text>
                            }

                            return <Text key={i} style={styles.cols}> {dayInfo.dayJalali} </Text>
                        })}
                    </View>  
        </React.Fragment>
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

export default PersianCalendar