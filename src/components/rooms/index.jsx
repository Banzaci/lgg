import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Room from './room';

const getDate = ({ day, month, year }) => {
  return new Date(year, month, day).getTime();
}

const renderRoom = (room, onRoomHandler, selectedStartDate, selectedEndDate, index) => {
  const isBooked = room.booked.reduce( (acc, current) => {
    const { checkin, checkout } = current;
    if (getDate(checkin) >= selectedStartDate && getDate(checkout) <= selectedEndDate) {
      acc = [...acc, false];
    } else {
      acc = [...acc, true];
    }
    return acc;
  }, []);
  return (
    <Room
      isBooked={ isBooked }
      key={ index }
      room={ room }
      onRoomHandler={ onRoomHandler }
    />
  )
}


const RoomItems = ({ rooms, onRoomHandler, startDate, endDate }) => {
  // if (tempDay.getTime() >= now.getTime() && tempDay.getTime() <= max.getTime()) {
  const selectedStartDate = getDate(startDate);
  const selectedEndDate = getDate(endDate);
  
  const roomItems = rooms.map( (room, index) => renderRoom(room, onRoomHandler, selectedStartDate, selectedEndDate, index))
  return (
    <Container>
      { roomItems }
    </Container>
  )
}

RoomItems.propTypes = {
  rooms: PropTypes.array.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  onRoomHandler: PropTypes.func.isRequired,
}

export default RoomItems