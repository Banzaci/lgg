import { BOOKING, IBOOKING } from './types';
import { todayDate } from '../utils/dates';

export const initialState: IBOOKING = {
  selectedRoom: {},
  rooms: [],
  todayDate,
  selectedMonth: todayDate,
  fromDate: todayDate,
  toDate: { ...todayDate, day: todayDate.day + 1 },
};

export function bookingReducer(state = initialState, action: any) {
  switch (action.type) {
    case BOOKING.ON_DATE_CHANGE:
      return {
        ...state,
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
      }
    case BOOKING.ON_MONTH_CHANGE:
      return {
        ...state,
        selectedMonth: action.payload
      }
    case BOOKING.ON_ROOM_CHANGE:
      return {
        ...state,
        selectedRoom: action.payload
      }
    case BOOKING.ON_GET_ROOMS:
      return {
        ...state,
        rooms: action.payload
      }
    default:
      return state
  }
}