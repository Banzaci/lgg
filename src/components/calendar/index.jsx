import React, { useState } from 'react'
import { Container, Button, Month, Day, Week, Empty, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { WEEK_DAYS, getNextMonth, currenthMonthAndYear, getDates } from '../../utils/dates';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

function generateDatePicker({ currentDate, dates }) {
  const { currentDay, currentMonth } = currentDate;
  let k = 0;

  return ( y.map((_, i) => {
    return (
      <Week key={ i }>
        { 
          x.map((_, v) => {
            const [ year, month, day ] = dates[k];
            k++;
            if (Number(month) < currentMonth) {
              return <Empty key={ v }>{ day }</Empty>
            } else if(Number(month) > currentMonth) {
              return <Empty key={ v }>{ day }</Empty>
            } else {
              return (<Day
                data-day={ day }
                data-month={ month }
                data-year={ year }
                key={ v }
                isActive={ Number(currentDay) === Number(day) }
              >
                { day }
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

const Calendar = ({ currentDate, dates, onDateChange }) => {
  const onChange = (e) => {
    
    const currentDay = e.target.dataset.day;
    const currentMonth = e.target.dataset.month;
    const currentYear = e.target.dataset.year;
    
    onDateChange({
      currentDay,
      currentMonth,
      currentYear
    });
  }

  const onPrevMonth = () => {
    // console.log('onPrevMonth')
  }

  const onNextMonth = () => {
    // const n = getNextMonth(dates);
    // setDates(getDates(n))
    // console.log('onNextMonth', n)
  }
  
  return (
    <Container>
      <Month>
        <Button onClick={ () => onPrevMonth() }>Prev</Button>
        {/* <MonthName>{ date.monthName }</MonthName> */}
        <Button onClick={ () => onNextMonth() }>Next</Button>
      </Month>
        <Weekdays>
        { Object.keys(WEEK_DAYS).map(renderWeekDay) }
      </Weekdays>
      <DatePicker onClick={ (e) => onChange(e) }>
        { generateDatePicker({ currentDate, dates }) }
      </DatePicker>
    </Container>
  )
}

Rooms.propTypes = {
  room: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  onRoomSelection: PropTypes.func.isRequired,
  currentDate: PropTypes.object.isRequired,
}

export default Calendar

// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://blog.logrocket.com/react-datepicker-217b4aa840da/

/*
function showCalendar(month, year) {
  const today = new Date()
  function daysInMonth(iMonth, iYear){ 
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
 
  let firstDay = (new Date(year, month)).getDay();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else if (date > daysInMonth(month, year)) {
        break;
      }

      else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("bg-info");
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
  }
}
console.clear()
showCalendar(10, 2019)

*/
