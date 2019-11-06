import React, { useState } from 'react';

import { getDates, THIS_MONTH, THIS_YEAR, THIS_DAY } from '../utils/dates';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendar from '../components/calendar';
import Rooms from '../components/rooms';

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

const IndexPage = () => {
  
  const [ startdDate, setStartDate ] = useState({
    day: THIS_DAY,
    month: THIS_MONTH,
    year: THIS_YEAR,
  });

  const [ endDate, setEndDate ] = useState({
    day: THIS_DAY + 1,
    month: THIS_MONTH,
    year: THIS_YEAR,
  });

  const [ booking, setBooking ] = useState({})

  return (
    <Layout>
      <SEO title="Home" />
      <Calendar
        selectedDate={ startdDate }
        dates={ getDates(startdDate) }
        onDateChange={ setStartDate }
      />
      <Calendar
        selectedDate={ endDate }
        dates={ getDates(endDate) }
        onDateChange={ setEndDate }
      />
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
