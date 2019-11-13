import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Button, Header, Input } from '../../styles/common';

const BookForm = ({ onClick, Container }) => {
  return (
    <Container>
      <Header>Booking</Header>
      <Paragraph>
        { dates.checkin }
      </Paragraph>
      <Input />
      <Button onClick={ onClick }></Button>
    </Container>
  )
}

BookForm.propTypes = {
  dates: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BookForm
