import { DATE, IDATE } from './types';
import { todayDate } from '../utils/dates';

export const initialState: IDATE = {
  todayDate,
  selectedRoom: {},
  selectedMonth: todayDate,
  fromDate: todayDate,
  toDate: { ...todayDate, day: todayDate.day + 1 },
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case DATE.ON_DATE_CHANGE:
      return {
        ...state,
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
      }
    case DATE.ON_MONTH_CHANGE:
      return {
        ...state,
        selectedMonth: action.payload
      }
    case DATE.ON_ROOM_CHANGE:
      return {
        ...state,
        selectedRoom: action.payload
      }
    default:
      throw new Error();
  }
}