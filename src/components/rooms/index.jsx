import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Room from './room';

const renderRoom = (room, onRoomSelection, index) => {
  return (
    <Room
      key={ index }
      room={ room }
      onRoomSelection={ onRoomSelection }
    />
  )
}

const RoomItems = ({ rooms, onRoomSelection }) => {
  const roomItems = rooms.map( (room, index) => renderRoom(room, onRoomSelection, index))
  return (
    <Container>
      { roomItems }
    </Container>
  )
}

RoomItems.propTypes = {
  rooms: PropTypes.array.isRequired,
  onRoomSelection: PropTypes.func.isRequired,
}

export default RoomItems
