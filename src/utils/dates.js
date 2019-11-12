export const CALENDAR_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const WEEK_DAYS = {
  Sun: 'Sun',
  Mon: 'Mon',
  Tues: 'Tue',
  Wednes: 'Wed',
  Thurs: 'Thu',
  Fri: 'Fri',
  Satur: 'Sat'
}

export const CALENDAR_WEEKS = 6;

const TODAY = new Date();

export const THIS_DAY = +(TODAY.getDate());
export const THIS_MONTH = +(TODAY.getMonth()) + 1;
export const THIS_YEAR = +(TODAY.getFullYear());

export function getDates({ month, year }) {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);
  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);
  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth({ month, year });
  const { month: nextMonth, year: nextMonthYear } = getNextMonth({ month, year });
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

  return [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ]
}

const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
}

const getMonthFirstDay = (month, year) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
}

const getMonthDays = (month, year) => {
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

export const getPreviousMonth = ({ month, year }) => {
  const prevMonth = (month > 1) ? month - 1 : 12;
  const prevMonthYear = (month > 1) ? year : year - 1;
  return { month: prevMonth, year: prevMonthYear };
}

export const getNextMonth = ({ month, year }) => {
  const nextMonth = (month < 12) ? month + 1 : 1;
  const nextMonthYear = (month < 12) ? year : year + 1;
  return { month: nextMonth, year: nextMonthYear };
}

export const isDate = date => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());
  
  return isDate && isValidDate;
}

export const isSameMonth = (date, basedate = new Date()) => {
  
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth = +(basedate.getMonth()) + 1;
  const basedateYear = basedate.getFullYear();

  const dateMonth = +(date.getMonth()) + 1;
  const dateYear = date.getFullYear();

  return (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
}

export const isSameDay = (date, basedate = new Date()) => {
  
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = +(basedate.getMonth()) + 1;
  const basedateYear = basedate.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = +(date.getMonth()) + 1;
  const dateYear = date.getFullYear();

  return (+basedateDate === +dateDate) && (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
}

export const getDateISO = ({ year, month, day }) => { 
  const date = new Date(year, month, day);
  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2)
  ].join('-');
  
}

export const daysBetween = ({ fromDate, toDate }) => {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(getTime(fromDate) - getTime(toDate));
  return Math.round(differenceMs / ONE_DAY);
}

export const getDate = ({ day, month, year }) => new Date(year, month, day)
export const getTime = ({ day, month, year }) => new Date(year, month, day).getTime()

export const getMonthName = ({ month }) => {
  return CALENDAR_MONTHS[month-1];
}

// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

// https://www.cssscript.com/create-simple-event-calendar-javascript-caleandar-js/