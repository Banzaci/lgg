import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './style';

const Rooms = ({ rooms }) => {
  return (
    <Container>
      { rooms }
    </Container>
  )
}

Rooms.propTypes = {
  room: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  onRoomSelection: PropTypes.func.isRequired,
  currentDate: PropTypes.object.isRequired,
}

export default Rooms
