import * as React from 'react';
import { MONTH_DAYS } from "./utils";
import NDate from "@nepo/ndate";
import CalendarHeader from './Header';
import DaysBlock from './DaysBlock';
import MonthsBlock from './MonthsBlock';
import YearsBlock from './YearsBlock';
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

   const [viewMode, setViewMode] = React.useState<string>("days")
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
        setViewMode("days")
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
        setViewMode("days")
    }
    const monthSelectedHandler= (month: number) => {
        const newDate = new NDate ([referenceDate.yearJalali, month, 1])
        setReferenceDate(newDate)
        setDaysObj(createMonth(referenceDate.yearJalali, month))
        setViewMode("days")
    }
    const yearSeletedHandler= (year: number) => {
        const newDate = new NDate ([year, referenceDate.monthJalali, 1])
        setReferenceDate(newDate)
        setDaysObj(createMonth(year, referenceDate.monthJalali))
        setViewMode("months")
    }
    return (
        <React.Fragment>
                    <CalendarHeader 
                    year={referenceDate.yearJalali}
                    month= {referenceDate.monthJalali}
                    showMonthBlock={() => setViewMode("months")}
                    showYearBlock={() => setViewMode("years")}
                    nextMonth={nextMonthHandler}
                    prevMonth={prevMonthHandler}
                    /> 
                    {viewMode === "days" && <DaysBlock
                    daysObj={daysObj}
                    />}
                    {viewMode === "months" && <MonthsBlock
                        onSelectMonth={monthSelectedHandler}
                    />}
                    {viewMode === "years" && <YearsBlock
                        currentYear={referenceDate.yearJalali}
                        onSelectYear={yearSeletedHandler}
                    />}
        </React.Fragment>
     )
}

export default PersianCalendar