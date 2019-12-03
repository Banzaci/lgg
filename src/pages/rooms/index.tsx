import React, { useReducer, useEffect } from 'react';
import { bookingReducer, initialState } from '../../store/bookingReducer';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Calendar from '../../components/calendar';
import RoomItems from '../../components/rooms';
import { getDates, todayDate } from '../../utils/dates';
import { Row } from '../../styles/common';
import { BOOKING } from '../../store/types';

const Rooms = () => {
  const [ state, dispatch ] = useReducer(bookingReducer, initialState);
  useEffect(() => {
    async function fetchRooms() {
      const result = await fetch('http://localhost:9000/rooms');
      const data = await result.json();
      dispatch({ type: BOOKING.ON_GET_ROOMS, payload: data.rooms })
    }
    fetchRooms();
  }, [])

  return (<Layout>
    <SEO title="Rooms" />
    <Row>
      <Calendar
        todayDate={ todayDate }
        dates={ getDates(state.selectedMonth) }
        selectedMonth={ state.selectedMonth }
        onDateChange={ payload => dispatch({ type: BOOKING.ON_DATE_CHANGE, payload }) }
        onMonthChange={ payload => dispatch({ type: BOOKING.ON_MONTH_CHANGE, payload }) }
        fromDate={ state.fromDate }
        toDate={ state.toDate }
        selectedRoom={ state.selectedRoom }
      />
    </Row>
    <Row>
      <RoomItems
        fromDate={ state.fromDate }
        toDate={ state.toDate }
        rooms={ state.rooms }
        onRoomHandler={ room => dispatch({ type: BOOKING.ON_ROOM_CHANGE, payload: room }) }
      />
    </Row>
  </Layout>)
}

export default Rooms
