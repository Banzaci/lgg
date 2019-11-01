import React from 'react'
import { Container, Month, Day, Week, Empty } from './style';
import { daysInMonth, firstDay, getDayByDate, setYearAndMonth } from '../../utils/dates';

function generateDatePicker() {
  const { year, month, monthNumber, monthName, date } = setYearAndMonth(false, 11);
  const { dayName } = getDayByDate(date);
  const dim = daysInMonth(year, month);
  const fd = firstDay(year, month);

  console.log('firstDay', fd)
  console.log('dayName', dayName)
  console.log('monthNumber', monthNumber)
  console.log('monthName', monthName)
  console.log('month', month)
  console.log('year', year)
  console.log('daysInMonth', dim)

  const x = Array.from({ length: 6 }, (_, i) => i);
  const y = Array.from({ length: 7 }, (_, i) => i);
  let day = 0;
  return ( x.map((_, i) => {
    return (
      <Week key={ i }>
        { 
          y.map((_, v) => {
            if(i === 0 && v < fd) return <Empty key={ v }>E1</Empty>
            else if(day > dim) return <Empty key={ v }>E2 { v }</Empty>
            else {
              day++;
              return <Day key={ v } isActive={ (day - 1) === fd }>{ day }</Day>
            }
          })
        }
      </Week>)
    })
  );
}

const Calendar = () => {
  return (
    <Container>
      <Month>
        { generateDatePicker() }
      </Month>
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
