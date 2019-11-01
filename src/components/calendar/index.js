import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './style';
import { daysInMonth, firstDay, getDayByDate, setYearAndMonth } from '../../utils/dates';

const Calendar = () => {
  const { year, month, monthNumber, monthName, date } = setYearAndMonth(false, 11);
  const { dayName } = getDayByDate(date);
  const dim = daysInMonth(year, month);
  const fd = firstDay(year, month);

  console.log('today', date)
  console.log('firstDay', fd)
  console.log('dayName', dayName)
  console.log('monthNumber', monthNumber)
  console.log('monthName', monthName)
  console.log('month', month)
  console.log('year', year)
  console.log('daysInMonth', dim)

  return (
    <Container>
      Calendar
    </Container>
  )
}

export default Calendar
