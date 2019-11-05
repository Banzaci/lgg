import React from 'react';
import PropTypes from 'prop-types';
import { Room, Header, Paragraph } from './style';

const RoomItem = ({ room, onRoomHandler }) => {
  return (
    <Room>
      <Header>{ room.name }</Header>
      <Paragraph>{ room.desc }</Paragraph>
      <Paragraph>{ room.price }</Paragraph>
    </Room>
  )
}

RoomItem.propTypes = {
  room: PropTypes.object.isRequired,
  onRoomHandler: PropTypes.func.isRequired,
}

export default RoomItem
