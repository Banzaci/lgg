import React, { Fragment } from 'react';
import { Nav } from './style';

const Navigation = () => (
  <Fragment>
    <Nav to="/">Home</Nav>
    <Nav to="/about/">About</Nav>
    <Nav to="/bookings/">Bookings</Nav>
  </Fragment>
)

export default Navigation
