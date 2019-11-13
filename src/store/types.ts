export interface IDATE {
	todayDate: any,
  selectedRoom: any,
  selectedMonth: any,
  fromDate: any,
  toDate: any,
}

export enum DATE {
	ON_DATE_CHANGE = 'ON_DATE_CHANGE',
	ON_MONTH_CHANGE = 'ON_MONTH_CHANGE',
	ON_ROOM_CHANGE = 'ON_ROOM_CHANGE'
}