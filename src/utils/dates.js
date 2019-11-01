const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const dayNames = ['Sunday', 'Monday', 'Thuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function setYearAndMonth(yr, monthIndex) {
  const date = new Date();

  if (yr) date.setFullYear(yr);
  if (monthIndex) date.setMonth(monthIndex);

  const year = date.getFullYear();
  const month = date.getMonth();

  return {
    date,
    year,
    month,
    monthNumber: month + 1,
    monthName: monthNames[month],
  }
}

export function getDayByDate(date) {
  if (typeof date !== 'object') return {}
  const today = new Date(date);
  const day = today.getDate();
  const dayNumber = today.getDay();
  return {
    day,
    dayName: dayNames[dayNumber],
  }
}

export function firstDay(year, month) {
  return new Date(year, month).getDay()
}

export function daysInMonth(year, month) { 
    return (32 - new Date(year, month, 32).getDate());
}

// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

// https://www.cssscript.com/create-simple-event-calendar-javascript-caleandar-js/