/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import { Wrapper } from '../../styles/common';
import { Main, GlobalStyle } from './style';

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        { children }
      </Wrapper>
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
