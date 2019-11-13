import React, { useReducer } from 'react';
import { reducer, initialState } from '../store/reducer';
import { DATE } from '../store/types';
import { getDates, todayDate } from '../utils/dates';
import { Row } from '../styles/common';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendar from '../components/calendar';
import Rooms from '../components/rooms';

const rooms = [
  {
    name: 'Single room shared bathroom',
    desc: 'Desc Single room shared bathroom',
    noOfGuest: 1,
    price: 80,
    booked: [
      {
        checkin: {
          day: 11,
          month: 11,
          year: 2019
        },
        checkout: {
          day: 18,
          month: 11,
          year: 2019
        },
      },
      {
        checkin: {
          day: 10,
          month: 12,
          year: 2019
        },
        checkout: {
          day: 18,
          month: 12,
          year: 2019
        },
      }
    ]
  }
]

const IndexPage = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Calendar
          todayDate={ todayDate }
          dates={ getDates(state.selectedMonth) }
          selectedMonth={ state.selectedMonth }
          onDateChange={ payload => dispatch({ type: DATE.ON_DATE_CHANGE, payload }) }
          onMonthChange={ payload => dispatch({ type: DATE.ON_MONTH_CHANGE, payload }) }
          fromDate={ state.fromDate }
          toDate={ state.toDate }
          selectedRoom={ state.selectedRoom }
        />
      </Row>
      <Row>
        <Rooms
          fromDate={ state.fromDate }
          toDate={ state.toDate }
          rooms={ rooms }
          onRoomHandler={ room => dispatch({ type: DATE.ON_ROOM_CHANGE, payload: room }) }
        />
      </Row>
    </Layout>
  )
}

export default IndexPage
