import React from 'react';
import PropTypes from 'prop-types';
import { Room } from './style';
import { Paragraph, Button, Header } from '../../styles/common';

const RoomItem = ({ room, onRoomHandler, booked }) => (
  <Room isBooked={ booked.isBooked }>
    { booked.isBooked && <Paragraph>{ `${ booked.checkin } / ${ booked.checkout }` }</Paragraph> }
    <Header>{ room.name }</Header>
    <Paragraph>{ room.desc }</Paragraph>
    <Paragraph>{ room.price }</Paragraph>
    <Button {...(booked.isBooked && { disabled:true })} onClick={ () => onRoomHandler(room) }>Book</Button>
  </Room>
)

RoomItem.propTypes = {
  room: PropTypes.object.isRequired,
  onRoomHandler: PropTypes.func.isRequired,
}

export default RoomItem
