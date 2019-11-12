import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Room from './room';

const getTime = ({ day, month, year }) => {
  return new Date(year, month, day).getTime();
}

const getDate = ({ day, month, year }) => {
  return new Date(year, month, day).toLocaleString();
}

const renderRoom = (room, onRoomHandler, fromDate, toDate, index) => {

  let isBooked = false;
  room.booked.forEach(({ checkin, checkout }) => {
    if(!isBooked) {
      isBooked = toDate.day >= checkin.day && fromDate.day <= checkout.day;
    }
  });

  console.log('isBooked', isBooked)
  return (
    <Room
      isBooked={ isBooked }
      key={ index }
      room={ room }
      onRoomHandler={ onRoomHandler }
    />
  )
}

const RoomItems = ({ rooms, onRoomHandler, fromDate, toDate }) => {
  const roomItems = rooms.map( (room, index) => 
    renderRoom(room, onRoomHandler, fromDate, toDate, index)
  );
  return (
    <Container>
      { roomItems }
    </Container>
  )
}

RoomItems.propTypes = {
  rooms: PropTypes.array.isRequired,
  fromDate: PropTypes.any.isRequired,
  toDate: PropTypes.any.isRequired,
  onRoomHandler: PropTypes.func.isRequired,
}

export default RoomItems
