import React from 'react';
import { Nav, Container } from './style';

const Navigation = () => (
  <Container>
    <Nav to="/">Home</Nav>
    <Nav to="/booking/">Booking</Nav>
    <Nav to="/about/">About</Nav>
  </Container>
)

export default Navigation
