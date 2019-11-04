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
        dates={ getDates() }
        onDateChange={ pickedDate => console.log(pickedDate) || setCurrentDate(pickedDate)}
      />
    </Layout>
  )
}

export default IndexPage
