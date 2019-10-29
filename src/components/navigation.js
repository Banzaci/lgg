import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navigation = () => (
  <Fragment>
    <Link to="/about/">About</Link>
    <Link to="/bookings/">Bookings</Link>
  </Fragment>
)

export default Navigation
