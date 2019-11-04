import React, { useState } from 'react';

import { getDates } from '../utils/dates';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendar from '../components/calendar';

const IndexPage = () => {
  const today = new Date();
  const [ currentDate, setCurrentDate ] = useState({
    currentDay: today.getDate(),
    currentMonth: today.getMonth() + 1
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Calendar
        currentDate={ currentDate }
        initialDates={ getDates() }
        onDateChange={ day => console.log(day) || setCurrentDate(day)}
      />
    </Layout>
  )
}

export default IndexPage
