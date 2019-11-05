import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Room from './room';

const renderRoom = (room, onRoomHandler, selectedDate, index) => {
  const isBooked = false;
  return (
    <Room
      key={ index }
      room={ room }
      onRoomHandler={ onRoomHandler }
    />
  )
}

const RoomItems = ({ rooms, onRoomHandler, selectedDate }) => {
  // if (tempDay.getTime() >= now.getTime() && tempDay.getTime() <= max.getTime()) {
  const roomItems = rooms.map( (room, index) => renderRoom(room, onRoomHandler, selectedDate, index))
  return (
    <Container>
      { roomItems }
    </Container>
  )
}

RoomItems.propTypes = {
  rooms: PropTypes.array.isRequired,
  selectedDate: PropTypes.object.isRequired,
  onRoomHandler: PropTypes.func.isRequired,
}

export default RoomItems
