import React from 'react';
import { Nav } from './style';
import { Container } from '../../styles/common';

const Navigation = () => (
  <Container>
    <Nav to="/">Home</Nav>
    <Nav to="/booking/">Booking</Nav>
    <Nav to="/food-drinks/">Food & drinks</Nav>
    <Nav to="/surfing/">Surfing</Nav>
    <Nav to="/contact/">Contact</Nav>
  </Container>
)

export default Navigation
