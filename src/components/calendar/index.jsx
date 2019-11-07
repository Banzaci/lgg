import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Month, Day, Week, Empty, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { WEEK_DAYS, getNextMonth, getPreviousMonth, getMonthName } from '../../utils/dates';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

const getTime = (date) => {
  if (!date) return false;
  const { day, month, year } = date;
  return new Date(year, month, day).getTime();
}

function isTodayHandler(year, month, day, today) {
  return (
    Number(today.day) === Number(day) &&
    Number(today.month) === Number(month) &&
    Number(today.year) === Number(year)
  );
}

function isActiveHandler(year, month, day, today) {
  return (
    Number(today.day) > Number(day) &&
    Number(today.month) === Number(month) &&
    Number(today.year) === Number(year)
  );
}

function generateDatePicker({ selectedMonth, todayDate, dates, fromDate, toDate }) {
  const { day: currentDay, month: currentMonth, year: currentYear } = selectedMonth;
  const { day: todayDay, month: todayMonth, year: todayYear } = todayDate;
  const { day: fromDateDay, month: fromDateMonth, year: fromDateYear } = fromDate;
  const { day: toDateDay, month: toDateMonth, year: toDateYear } = toDate;
  // console.log('todayDate', todayYear, todayMonth, todayDay);
  // console.log('selectedMonth', currentYear, currentMonth, currentDay);
  // console.log('fromDate', fromDateYear, fromDateMonth, fromDateDay);
  // console.log('dates', dates[10])
  let k = 0;
  return ( y.map((_, i) => {
    return (
      <Week key={ i }>
        { 
          x.map((_, v) => {
            const [ thisYear, thisMonth, thisDay ] = dates[k];
            k++;
            if (Number(thisMonth) < currentMonth) {
              return <Empty key={ v }>{ thisDay }</Empty>
            } else if(Number(thisMonth) > currentMonth) {
              return <Empty key={ v }>{ thisDay }</Empty>
            } else {
              const isToday = isTodayHandler(thisYear, thisMonth, thisDay, todayDate);
              const isActive = isActiveHandler(thisYear, thisMonth, thisDay, todayDate);
              const isFromDay = isTodayHandler(thisYear, thisMonth, thisDay, fromDate);
              // console.log(isFromDay, thisDay, currentDay)
              return (<Day
                data-day={ thisDay }
                data-month={ thisMonth }
                data-year={ thisYear }
                key={ v }
                isToday={ isToday }
                isActive={ isActive }
                isFromDay={ isFromDay }
                isFromDay={ isFromDay }
              >
                { thisDay }
              </Day>)
            }
          })
        }
      </Week>)
    })
  );
}

function renderWeekDay(dayName, index) {
  return <Weekday key={ index }>{ dayName }</Weekday>
}

function setFromAndToDate(fromDate, toDate, { day, month, year }) {
  const fd = getTime(fromDate);
  const td = getTime(toDate);
  console.log(fd, td)
  return fromDate ? {
    fromDate,
    toDate: {
      day,
      month,
      year
    }} : {
      toDate,
      fromDate: {
        day,
        month,
        year
      },
    }
}

const Calendar = ({ selectedMonth, onMonthChange, todayDate, dates, onDateChange, isActive, fromDate, toDate }) => {
  console.log('fromDate-----', fromDate);
  console.log('toDate-----', toDate);
  const onChange = (e) => {
    const day = Number(e.target.dataset.day);
    const month = Number(e.target.dataset.month);
    const year = Number(e.target.dataset.year);
    if (day && day >= todayDate.day) {
      const range = setFromAndToDate(fromDate, toDate, { day, month, year });
      console.log('range: ------', range);
      onDateChange({ ...range });
    }
  }

  const onPrevMonth = () => onMonthChange({ ...selectedMonth, ...getPreviousMonth(selectedMonth)})
  const onNextMonth = () => onMonthChange({ ...selectedMonth, ...getNextMonth(selectedMonth)})

  return (
    <Container isActive={ isActive }>
      <Month>
        <Button onClick={ () => onPrevMonth() }>Prev</Button>
        <MonthName>{ `${getMonthName(selectedMonth)} ${selectedMonth.year}` }</MonthName>
        <Button onClick={ () => onNextMonth() }>Next</Button>
      </Month>
        <Weekdays>
        { Object.keys(WEEK_DAYS).map(renderWeekDay) }
      </Weekdays>
      <DatePicker onClick={ (e) => onChange(e) }>
        { generateDatePicker({ selectedMonth, todayDate, dates, fromDate }) }
      </DatePicker>
    </Container>
  )
}

Calendar.propTypes = {
  todayDate: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
}

export default Calendar

// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://blog.logrocket.com/react-datepicker-217b4aa840da/
