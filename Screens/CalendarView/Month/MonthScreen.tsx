import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NDate from '@nepo/ndate';
import { MONTH_DAYS } from '../Utils/PersianUtils';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import CustomButton from '../../../Components/Buttons/CustomButton';
import { useRef } from 'react';
import { MONTH_NAMES } from '../../../Components/Calendar/Persian/utils';
import MonethGridHeader from './header';


interface IProps { }
const DEVICE_WIDTH = Dimensions.get('window').width

const createMonth = (year: number, month: number) => {
   const cal = new NDate([year, month, 1])
   let currentSelectYear = year;
   let theDaysOfMonth = MONTH_DAYS[month - 1];
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
const MonthScreen = (props: any) => {

   const [viewMode, setViewMode] = React.useState<string>("days")
   const [daysObj, setDaysObj] = React.useState<any[]>([])
   const [cal, setCal] = React.useState<any[]>([])
   const [curentDates , setCurrentDates] = React.useState<NDate[]>([]);
   const [referenceDate, setReferenceDate] = React.useState<NDate>(new NDate())
   const [currentIndex, setcurrentIndex] = React.useState<number>(1)

   const createYear = (currentMonth: NDate) => {
      let month = currentMonth.monthJalali - 1
      let year = currentMonth.yearJalali
      if(month === 0){
         month = 12;
         year--;
      }
      const newCal = []
      const refDates: NDate[] = []
      for (let i = 0; i < 3; i++) {
         const MainDate = new NDate([year, month, 1]);
         refDates[i]= MainDate
         newCal.push({ id: "month" + Math.random(),
         name: MONTH_NAMES[month - 1] + " " + year,
         mainDate: MainDate,
         monthDays: createMonth(MainDate.yearJalali, MainDate.monthJalali) })
         month++;
         if(month === 13){
            month = 1;
            year++
         }
      }
      setCal(newCal)
      setCurrentDates(refDates)
   }

   const [switchMode, setSwitchMode] = React.useState(false)
   const listRef: any = useRef(null)

   React.useEffect(() => {
      createYear(referenceDate)
      // setCal(cal)
      
      setTimeout(() => {
         chenageMonth(1)
      }, 500);
   }, [])
   const chenageMonth = (index) => {
      if(!listRef) {
         return
      }
      if(!listRef.current) {
         return
      }
      listRef.current.scrollTo({ x: (index * DEVICE_WIDTH), y: 0, animated: false })
   }

   const nextMonth = (monthIndex) => {
      if(!cal[monthIndex]){
         return
      }
      const currentMonth = cal[monthIndex].mainDate
      let month = currentMonth.monthJalali + 1
      let year = currentMonth.yearJalali
      
      if(month > 12){
         month = 1;
         year++
      }

      const newCal = [...cal]
         const MainDate = new NDate([year, month, 1]);
         newCal.push({ id: "month" + Math.random(),
         name: MONTH_NAMES[month - 1] + " " + year,
         mainDate: MainDate,
         monthDays: createMonth(MainDate.yearJalali, MainDate.monthJalali) })
         month++;
      setCal(newCal)
   }
   const prevMonth = (monthIndex) => {
      if(!cal[monthIndex]){
         return
      }
      const currentMonth = cal[monthIndex].mainDate
      let month = currentMonth.monthJalali - 1
      let year = currentMonth.yearJalali
      
      if(month < 1){
         month = 12;
         year--
      }
      
      const newCal = [...cal]
         const MainDate = new NDate([year, month, 1]);
         newCal.unshift({ id: "month" + Math.random(),
         name: MONTH_NAMES[month - 1] + " " + year,
         mainDate: MainDate,
         monthDays: createMonth(MainDate.yearJalali, MainDate.monthJalali) })
         month++;
      setCal(newCal)
      chenageMonth(1)
   }
   const MonthChangeHandler = (index) =>{
      if(index  === (cal.length - 1) ){
         nextMonth(index)
      }
      if(index === 0){
         prevMonth(index)
      }
      setcurrentIndex(index)
   }

   return (
      <View style={styles.screen}><ScrollView
            ref={listRef}
            horizontal={true}
            decelerationRate= "fast"

            snapToInterval={DEVICE_WIDTH}
            snapToAlignment={"center"}
            onMomentumScrollEnd={(e) => { 
               MonthChangeHandler(Math.floor(e.nativeEvent.contentOffset.x / DEVICE_WIDTH))
            }}
            style={styles.views}>
            {cal.map((month) => {
               return <View key={month.id}>
                  <Text style={styles.monthHeader}> {month.name} </Text>
                  <MonethGridHeader />
                  <View  style={styles.months}>
                  {month.monthDays.length > 0 && month.monthDays.map((day: NDate, i: any) => {
                     if (!day) {
                        return <View key={i} style={styles.col}></View>
                     }
                     return (
                        <View key={i} style={styles.col}><Text> {day.dayJalali} </Text></View>
                     )
                  })}
               </View>
               </View>
            })}
         </ScrollView>
         {/* <CustomButton title="SIWTCH" onPress={() => {
            chenageMonth(3);

         }} /> */}
      </View>
   )
}

export const navOption = () => {

}
const styles = StyleSheet.create({
   screen: {
      flex: 1,
      backgroundColor: '#fff',
   },
   months: {
      width: DEVICE_WIDTH,
      backgroundColor: '#fff',
      flexDirection: "row-reverse",
      flexWrap: "wrap",
   },
   col: {
      width: Math.floor(DEVICE_WIDTH / 7),
      borderWidth: 1,
      borderColor: "#ccc",
      minHeight: 80,
   },
   monthHeader: {
      fontSize: 17,
      fontFamily: "shabnam-bold",
      paddingTop: 40,
      paddingBottom: 10,
      paddingHorizontal: 15
   },
   views: {
      flex: 1,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "#fff",
   }
});


export default MonthScreen