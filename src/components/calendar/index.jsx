import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Month, Day, Week, Empty, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { WEEK_DAYS, getNextMonth, getPreviousMonth, getMonthName } from '../../utils/dates';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

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

function generateDatePicker({ selectedMonth, todayDate, dates, fromDate }) {
  const { day: currentDay, month: currentMonth, year: currentYear } = selectedMonth;
  const { day: todayDay, month: todayMonth, year: todayYear } = todayDate;
  const { day: fromDateDay, month: fromDateMonth, year: fromDateYear } = fromDate;
  // console.log('todayDate', todayYear, todayMonth, todayDay);
  console.log('selectedMonth', currentYear, currentMonth, currentDay);
  console.log('fromDate', fromDateYear, fromDateMonth, fromDateDay);
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
              const isSelectedDay = isTodayHandler(thisYear, thisMonth, thisDay, fromDate);
              // console.log(isSelectedDay, thisDay, currentDay)
              return (<Day
                data-day={ thisDay }
                data-month={ thisMonth }
                data-year={ thisYear }
                key={ v }
                isToday={ isToday }
                isActive={ isActive }
                isSelectedDay={ isSelectedDay }
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

const Calendar = ({ selectedMonth, onMonthChange, todayDate, dates, onDateChange, isActive, fromDate }) => {
  console.log(fromDate)
  const onChange = (e) => {
    const day = Number(e.target.dataset.day);
    const month = Number(e.target.dataset.month);
    const year = Number(e.target.dataset.year);
    if (day && day >= todayDate.day) {
      // console.log(day, month, year, fromDate)
      onDateChange({
        fromDate: {
          day,
          month,
          year
        },
      });
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
