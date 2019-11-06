import React, { useState } from 'react';

import { getDates, THIS_MONTH, THIS_YEAR, THIS_DAY } from '../utils/dates';
import { Wrapper, Row } from './style';

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

const initialDate = {
  day: THIS_DAY,
  month: THIS_MONTH,
  year: THIS_YEAR,
};

const IndexPage = () => {
  
  const [ activeDP, setActiveDP ] = useState({ dp1: 0, dp2: 0 });
  const [ startdDate, setStartDate ] = useState({ ...initialDate });
  const [ endDate, setEndDate ] = useState({ ...initialDate, day: initialDate + 1 });

  const [ booking, setBooking ] = useState({});

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Input onFocus={ () => setActiveDP({ dp1: 1, dp2: 0 }) } />
        <Input onFocus={ () => setActiveDP({ dp1: 0, dp2: 1 }) } />
      </Row>
      <Row>
        <Calendar
          isActive={ activeDP.dp1 }
          selectedDate={ startdDate }
          dates={ getDates(startdDate) }
          onDateChange={ setStartDate }
        />
        <Calendar
          isActive={ activeDP.dp2 }
          selectedDate={ endDate }
          dates={ getDates(endDate) }
          onDateChange={ setEndDate }
        />
      </Row>
      <Rooms
        startdDate={ startdDate }
        endDate={ endDate }
        rooms={ rooms }
        onRoomHandler={ setBooking }
      />
    </Layout>
  )
}

export default IndexPage
