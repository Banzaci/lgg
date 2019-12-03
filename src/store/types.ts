export interface IBOOKING {
	todayDate: any,
  selectedMonth: any,
  fromDate: any,
  toDate: any,
  selectedRoom: any,
  rooms: any
}

export enum BOOKING {
	ON_DATE_CHANGE = 'ON_DATE_CHANGE',
  ON_MONTH_CHANGE = 'ON_MONTH_CHANGE',
  ON_ROOM_CHANGE = 'ON_ROOM_CHANGE',
  ON_GET_ROOMS = 'ON_GET_ROOMS'
}