import React, { useState } from 'react'
import { Container, Button, Month, Day, Week, Empty, Weekday, Weekdays, DatePicker, MonthName } from './style';
import { dayNames, getNextMonth, daysInMonth, firstDay, getDate } from '../../utils/dates';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

function generateDatePicker({ year, month, day }) {
  
  const dim = daysInMonth(year, month);
  const fd = firstDay(year, month);
  
  let iDay = 1;

  return ( y.map((_, i) => {
    return (
      <Week key={ i }>
        { 
          x.map((_, v) => {
            if(i === 0 && v < (fd - 1)) return <Empty key={ v }></Empty>
            else if(iDay > dim) {
              return <Empty key={ v }></Empty>
            }
            else {
              const isActive = Number(iDay) === Number(day);
              const cd = <Day
                data-id={ iDay }
                key={ v }
                isActive={ isActive }
              >
                { iDay }
              </Day>
              iDay++;
              return cd;
            }
          })
        }
      </Week>)
    })
  );
}

function renderWeekDay() {
  const x = Array.from({ length: 7 }, (_, i) => i);
  return ( x.map((_, i) => {
      return (<Weekday key={ i }>{ dayNames[i] }</Weekday>)
    })
  );
}

const Calendar = ({ initialDate, onDateChange }) => {
  const [ date, setDate ] = useState(initialDate);

  console.log({
    ...date
  });

  const onChange = (e) => {
    const id = e.target.dataset.id;
    onDateChange(id);
  }

  const onPrevMonth = () => {
    console.log('onPrevMonth')
  }

  const onNextMonth = () => {
    const n = getNextMonth(date);
    setDate(getDate(n))
    console.log('onNextMonth', n)
  }
  
  return (
    <Container>
      <Month>
        <Button onClick={ () => onPrevMonth() }>Prev</Button>
        <MonthName>{ date.monthName }</MonthName>
        <Button onClick={ () => onNextMonth() }>Next</Button>
      </Month>
      {/* <Weekdays>
        { renderWeekDay() }
      </Weekdays>
      <DatePicker onClick={ (e) => onChange(e) }>
        { generateDatePicker({ onDateChange, ...date }) }
      </DatePicker> */}
    </Container>
  )
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
