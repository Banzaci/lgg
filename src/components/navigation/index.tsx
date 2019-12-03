import React from 'react';
import { Nav, Container } from './style';

const Navigation = () => (
  <Container>
    <Nav to="/">Home</Nav>
    <Nav to="/rooms/">Rooms</Nav>
    <Nav to="/food-drinks/">Food & drinks</Nav>
    <Nav to="/contact/">Contact</Nav>
    <Nav to="/things-to-do/">Things to do</Nav>
    <Nav to="/media/">Media</Nav>
  </Container>
)

export default Navigation;
