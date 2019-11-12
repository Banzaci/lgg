import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './style';

const BookForm = ({ onClick }) => {
  return (
    <Container>
      <Button onClick={ onClick }></Button>
    </Container>
  )
}

BookForm.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BookForm
