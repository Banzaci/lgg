import React from 'react';
import { getTime } from '../../utils/dates';
import { Day, Week, Empty } from './style';

const y = Array.from({ length: 6 }, (_, i) => i);
const x = Array.from({ length: 7 }, (_, i) => i);

const isDayHandler = (year, month, day, today) => (
  Number(today.day) === Number(day) &&
  Number(today.month) === Number(month) &&
  Number(today.year) === Number(year)
);

const isActiveHandler = (year, month, day, today) => (
  Number(today.day) > Number(day) &&
  Number(today.month) === Number(month) &&
  Number(today.year) === Number(year)
);

export function generateDatePicker({ onChange, selectedRoom, selectedMonth, todayDate, dates, fromDate, toDate }) {
  const { month: currentMonth } = selectedMonth;

  const fromDateTime = getTime(fromDate);
  const toDateTime = getTime(toDate);

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
              const isToday = isDayHandler(thisYear, thisMonth, thisDay, todayDate);
              const isActive = isActiveHandler(thisYear, thisMonth, thisDay, todayDate);
              const isFromDay = isDayHandler(thisYear, thisMonth, thisDay, fromDate);
              const isToDay = isDayHandler(thisYear, thisMonth, thisDay, toDate);
              const dayTime = getTime({ year:thisYear, month:thisMonth, day:thisDay});
              const isSelected = dayTime > fromDateTime && dayTime < toDateTime;
              let isBooked = false;
              if (selectedRoom && Array.isArray(selectedRoom.booked)) {
                selectedRoom.booked.forEach(({ checkin, checkout }) => {
                  if(!isBooked) {
                    isBooked = dayTime > getTime(checkin) && dayTime <= getTime(checkout);
                  }
                });
              }
              return (<Day
                onClick={ onChange }
                data-day={ thisDay }
                data-month={ thisMonth }
                data-year={ thisYear }
                data-booked={ isBooked }
                key={ v }
                isToday={ isToday }
                isActive={ isActive }
                isFromDay={ isFromDay }
                isToDay={ isToDay }
                isSelected={ isSelected }
                isBooked={ isBooked }
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