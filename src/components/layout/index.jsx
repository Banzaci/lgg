/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import { Container, Main, GlobalStyle } from './style';

const Layout = ({ children }) => {
  return (
    <Main>
      <Navigation />
      <Container>
        { children }
      </Container>
      <GlobalStyle />
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
