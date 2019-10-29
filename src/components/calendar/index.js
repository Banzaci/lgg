import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './style';

const Calendar = ({ dates }) => {
  return (
    <Container>
      Calendar
    </Container>
  )
}

Calendar.propTypes = {
  date: PropTypes.array.isRequired,
}

export default Calendar
