import React, { useState } from 'react';

import { getDates } from '../utils/dates';

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
        checkin: '2019-12-01',
        checkout: '2019-12-05',
      },
      {
        checkin: '2019-12-08',
        checkout: '2019-12-10',
      }
    ]
  }
]

const IndexPage = () => {
  const today = new Date();

  const [ currentDate, setCurrentDate ] = useState({
    currentDay: today.getDate(),
    currentMonth: today.getMonth() + 1
  });

  const [ room, setRoom ] = useState({})
  console.log('room', room);
  return (
    <Layout>
      <SEO title="Home" />
      <Calendar
        currentDate={ currentDate }
        dates={ getDates() }
        onDateChange={ setCurrentDate }
      />
      <Rooms
        rooms={ rooms }
        onRoomSelection={ setRoom }
      />
    </Layout>
  )
}

export default IndexPage
