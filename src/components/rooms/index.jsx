import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Room from './room';

const getTime = ({ day, month, year }) => {
  return new Date(year, month, day).getTime();
}

const renderRoom = (room, onRoomHandler, fromDate, toDate, index) => {
  const isBooked = room.booked.reduce( (acc, current) => {
    const { checkin, checkout } = current;
    const booked = getTime(checkin) >= fromDate && toDate <= getTime(checkout);
    acc = [...acc, booked];
    return acc;
  }, []);
  console.log(isBooked)
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
    renderRoom(room, onRoomHandler, getTime(fromDate), getTime(toDate), index)
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
