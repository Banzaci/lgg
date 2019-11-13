import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styles/common';
import Room from './room';
import { getTime, getDateISO } from '../../utils/dates';

const renderRoom = (room, onRoomHandler, fromDate, toDate, index) => {
  let booked = {
    isBooked: false
  };
  room.booked.forEach(({ checkin, checkout }) => {
    if(!booked.isBooked) {
      const isBooked = getTime(toDate) >= getTime(checkin) && getTime(fromDate) <= getTime(checkout);
      booked = {
        ...(isBooked && {
          checkin: getDateISO(checkin),
          checkout: getDateISO(checkout)
        }),
        isBooked
      };
    }
  });

  return (
    <Room
      booked={ booked }
      key={ index }
      room={ room }
      onRoomHandler={ onRoomHandler }
    />
  )
}

const RoomItems = ({ rooms, onRoomHandler, fromDate, toDate }) => {
  const roomItems = rooms.map((room, index) => 
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
