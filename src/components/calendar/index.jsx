import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Month, Day, Week, Empty, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { WEEK_DAYS, getNextMonth, getPreviousMonth, getMonthName } from '../../utils/dates';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

function generateDatePicker({ selectedDate, dates }) {
  const { day, month } = selectedDate;
  let k = 0;
  return ( y.map((_, i) => {
    return (
      <Week key={ i }>
        { 
          x.map((_, v) => {
            const [ thisYear, thisMonth, thisDay ] = dates[k];
            k++;
            if (Number(thisMonth) < month) {
              return <Empty key={ v }>{ thisDay }</Empty>
            } else if(Number(thisMonth) > month) {
              return <Empty key={ v }>{ thisDay }</Empty>
            } else {
              return (<Day
                data-day={ thisDay }
                data-month={ thisMonth }
                data-year={ thisYear }
                key={ v }
                isActive={ Number(day) === Number(thisDay) }
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

const Calendar = ({ selectedDate, dates, onDateChange }) => {
  const onChange = (e) => {
    const { day } = e.target.dataset
    onDateChange({
      ...selectedDate,
      day: Number(day)
    });
  }

  const onPrevMonth = () => {
    onDateChange({ ...selectedDate, ...getPreviousMonth(selectedDate)})
  }
  
  const onNextMonth = () => {
    const a = getNextMonth(selectedDate)
    console.log(selectedDate)
    console.log(a)
    onDateChange({ ...selectedDate, ...a})
  }

  return (
    <Container>
      <Month>
        <Button onClick={ () => onPrevMonth() }>Prev</Button>
        <MonthName>{ `${getMonthName(selectedDate)} ${selectedDate.year}` }</MonthName>
        <Button onClick={ () => onNextMonth() }>Next</Button>
      </Month>
        <Weekdays>
        { Object.keys(WEEK_DAYS).map(renderWeekDay) }
      </Weekdays>
      <DatePicker onClick={ (e) => onChange(e) }>
        { generateDatePicker({ selectedDate, dates }) }
      </DatePicker>
    </Container>
  )
}

Calendar.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
}

export default Calendar

// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://blog.logrocket.com/react-datepicker-217b4aa840da/
