import React, { useState, useReducer } from 'react';

import { getDates, THIS_MONTH, THIS_YEAR, THIS_DAY } from '../utils/dates';
import { Row } from './style';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendar from '../components/calendar';
import Rooms from '../components/rooms';
import Input from '../atoms/input';

const rooms = [
  {
    name: 'Single room shared bathroom',
    desc: 'Single room shared bathroom',
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

const todayDate = {
  day: THIS_DAY,
  month: THIS_MONTH,
  year: THIS_YEAR
}

const initialState = {
  dp1: 0,
  dp2: 0,
  todayDate,
  selectedRoom: {},
  selectedMonth: { ...todayDate },
  fromDate: { ...todayDate },
  toDate: { ...todayDate, day: todayDate.day + 1 },
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'onDateChange':
      return {
        ...state,
        fromDate: payload.fromDate,
        toDate: payload.toDate,
      }
    case 'onMonthChange':
      return {
        ...state,
        selectedMonth: payload
      }
    case 'onRoomChange':
      return {
        ...state,
        selectedRoom: payload
      }
    default:
      throw new Error();
  }
}

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
          onDateChange={ payload => dispatch({ type: 'onDateChange', payload }) }
          onMonthChange={ payload => dispatch({ type: 'onMonthChange', payload }) }
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
          onRoomHandler={ room => dispatch({ type: 'onRoomChange', payload: room }) }
        />
      </Row>
    </Layout>
  )
}

export default IndexPage
