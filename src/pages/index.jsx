import React, { useState } from 'react';

import { getDate } from '../utils/dates';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendar from '../components/calendar';

const IndexPage = () => {
  const [ startDate, setStartDate ] = useState();
  console.log(startDate)
  return (
    <Layout>
      <SEO title="Home" />
      <Calendar
        initialDate={ getDate() }
        onDateChange={ data => console.log(data) || setStartDate(data)}
      />
    </Layout>
  )
}

export default IndexPage
