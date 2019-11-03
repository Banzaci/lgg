export const CALENDAR_MONTHS = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec'
}

export const WEEK_DAYS = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat'
}

export const CALENDAR_WEEKS = 6;
export const THIS_MONTH = +(new Date().getMonth()) + 1;
export const THIS_YEAR = +(new Date().getFullYear());

export function getDate(year = THIS_YEAR, month = THIS_MONTH) {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);
  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);
  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [ prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2) ];
  });

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  return {
    monthDays,
    monthFirstDay,
    daysFromPrevMonth,
    daysFromNextMonth,
    prevMonth,
    prevMonthYear,
    nextMonth,
    nextMonthYear,
    prevMonthDays,
    prevMonthDates,
    thisMonthDates,
    nextMonthDates,
    calendar: [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ]
  }
}

export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
}

export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
}

export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
      ? 30
      : 31;
}

export const getPreviousMonth = ( month, year ) => {
  const prevMonth = (month > 1) ? month - 1 : 12;
  const prevMonthYear = (month > 1) ? year : year - 1;
  return { month: prevMonth, year: prevMonthYear };
}

export const getNextMonth = (month, year) => {
  const nextMonth = (month < 12) ? month + 1 : 1;
  const nextMonthYear = (month < 12) ? year : year + 1;
  return { month: nextMonth, year: nextMonthYear };
}

export function firstDay(year, month) {
  return new Date(year, month).getDay()
}

export function daysInMonth(year, month) { 
    return (32 - new Date(year, month, 32).getDate());
}

// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

// https://www.cssscript.com/create-simple-event-calendar-javascript-caleandar-js/