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

const initDate = {
  day: THIS_DAY,
  month: THIS_MONTH,
  year: THIS_YEAR
}

const initialState = {
  dp1: 0,
  dp2: 0,
  startDate: {
    ...initDate
  },
  endDate: {
    ...initDate,
    day: THIS_DAY + 1
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'startDate':
      return {
        ...state,
        startDate: action.payload
      }
    case 'endDate':
      return {
        ...state,
        endDate: action.payload
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
  console.log(state.startDate)
  console.log(state.endDate)
  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Input onFocus={ () => dispatch({ type: 'dp1' }) } />
        <Input onFocus={ () => dispatch({ type: 'dp2' }) } />
      </Row>
      <Row>
        <Calendar
          selectedDate={ state.startDate }
          dates={ getDates(state.startDate) }
          onDateChange={ payload => dispatch({ type: 'startDate', payload }) }
        />
        <Calendar
          selectedDate={ state.endDate }
          dates={ getDates(state.endDate) }
          onDateChange={ payload => dispatch({ type: 'endDate', payload }) }
        />
      </Row>
      <Row>
        <Rooms
          startDate={ state.startDate }
          endDate={ state.endDate }
          rooms={ rooms }
          onRoomHandler={ () => {} }
        />
      </Row>
    </Layout>
  )
}

export default IndexPage
