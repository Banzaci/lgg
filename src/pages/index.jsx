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
          day: 2,
          month: 11,
          year: 2019
        },
        checkout: {
          day: 8,
          month: 11,
          year: 2019
        },
      },
      {
        checkin: {
          day: 11,
          month: 11,
          year: 2019
        },
        checkout: {
          day: 14,
          month: 11,
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
  selectedMonth: todayDate,
  fromDate: {},
};

function dateChecker(startDate, endDate) {
  if(startDate.day >= endDate.day && startDate.month >= endDate.month && startDate.year >= endDate.year) {
    return {
      endDate: {
        ...startDate,
        day: startDate.day + 1,
      },
      startDate
    }
  }
  return {
    startDate
  };
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'onDateChange':
        console.log('onDateChange', payload)
      return {
        ...state,
        fromDate: payload.fromDate,
        // ...dateChecker(payload, state.toDate)
      }
    case 'onMonthChange':
      console.log('onMonthChange', payload)
      return {
        ...state,
        selectedMonth: payload
        // ...dateChecker(payload, state.toDate)
      }
    case 'dp1':
      return {
        ...state,
        dp1: 1,
        dp2: 0
      }
    case 'dp1':
      return {
        ...state,
        dp1: 0,
        dp2: 1
      }
    default:
      throw new Error();
  }
}

const IndexPage = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log(state)
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
        />
      </Row>
      <Row>
        {/* <Rooms
          rooms={ rooms }
          onRoomHandler={ () => {} }
        /> */}
      </Row>
    </Layout>
  )
}

export default IndexPage
