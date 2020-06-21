import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NDate from '@nepo/ndate';
import { MONTH_DAYS } from '../Utils/PersianUtils';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import CustomButton from '../../../Components/Buttons/CustomButton';
import { useRef } from 'react';
import SwipBox from '../../../Components/SwipBox';


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
const MonthScreen = (props: IProps) => {

   const [viewMode, setViewMode] = React.useState<string>("days")
   const [daysObj, setDaysObj] = React.useState<any[]>([])
   const [cal, setCal] = React.useState<any[]>([])
   const [referenceDate, setReferenceDate] = React.useState<NDate>(new NDate())

   const createYear = () => {
      const m = 0
      const newCal = [...cal]
      for (let i = 1; i < 3; i++) {
         const MainDate = new NDate([1399, i, 1]);
         newCal.push({ id: "month" + Math.random(), monthDays: createMonth(MainDate.yearJalali, MainDate.monthJalali) })
      }
      setCal(newCal)
   }

   const [switchMode, setSwitchMode] = React.useState(false)

   React.useEffect(() => {
      createYear()
      // setCal(cal)
   }, [])
   const listRef: any = useRef(null)
   console.log(cal.length)
   return (
      <View style={styles.screen}>
         <Text> Months </Text>
         {switchMode && <FlatList data={cal} ref={listRef}
            keyExtractor={item => item.id} horizontal={true}
            renderItem={(calData) => {
               return <View style={styles.months}>
                  {calData.item.monthDays.length > 0 && calData.item.monthDays.map((day: NDate, i: any) => {
                     if (!day) {
                        return <View key={i} style={styles.col}></View>
                     }
                     return (
                        <View key={i} style={styles.col}><Text> {day.dayJalali} </Text></View>
                     )
                  })}
               </View>
            }}
            onEndReached={createYear}
            onEndReachedThreshold={1}
            initialNumToRender={10}
         />}
         {!switchMode && <SwipBox>
            {/* <ScrollView
               horizontal={true}
               onMomentumScrollEnd={() => {

               }}
               style={styles.views}> */}
               {cal.map((month) => {
                  return <View key={month.id} style={styles.months}>
                     {month.monthDays.length > 0 && month.monthDays.map((day: NDate, i: any) => {
                        if (!day) {
                           return <View key={i} style={styles.col}></View>
                        }
                        return (
                           <View key={i} style={styles.col}><Text> {day.dayJalali} </Text></View>
                        )
                     })}
                  </View>
               })}
            {/* </ScrollView> */}
         </SwipBox>}
         <CustomButton title="SIWTCH" onPress={() => setSwitchMode(!switchMode)} />
      </View>
   )
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
   views: {
      flex: 1,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "yellow",
   }
});


export default MonthScreen