import React from 'react';
import PropTypes from 'prop-types';
import { generateDatePicker } from './dp';
import { Container, Button } from '../../styles/common';
import { Month, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { WEEK_DAYS, getNextMonth, getPreviousMonth, getMonthName, daysBetween } from '../../utils/dates';

function renderWeekDay(dayName, index) {
  return <Weekday key={ index }>{ dayName }</Weekday>
}

function setFromAndToDate(fromDate, toDate, selectedDate) {
  if(fromDate && toDate) {
    return {
      fromDate: { ...selectedDate },
      toDate: false,
    }
  }

  return {
    ...(fromDate && { fromDate, toDate: { ...selectedDate } }),
    ...(!fromDate && { fromDate: { ...selectedDate }, toDate })
  }
}

const Calendar = ({ selectedRoom, selectedMonth, onMonthChange, todayDate, dates, onDateChange, isActive, fromDate, toDate }) => {
  const onChange = (e) => {
    const day = Number(e.target.dataset.day);
    const month = Number(e.target.dataset.month);
    const year = Number(e.target.dataset.year);
    const isBooked = JSON.parse(e.target.dataset.booked);
    if (!isBooked && (day >= todayDate.day) && (month >= todayDate.month)) {
      const range = setFromAndToDate(fromDate, toDate, { day, month, year });
      const days = daysBetween(range);
      onDateChange({ ...range, days });
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
      <DatePicker>
        { generateDatePicker({ onChange, selectedRoom, selectedMonth, todayDate, dates, fromDate, toDate }) }
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
