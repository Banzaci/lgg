import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container as Main } from '../../styles/common';

export const Nav = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: .9rem;

  &:hover {
    color: grey;
  }
`;

export const Container = styled(Main)`
  margin: 22px 0 0 0;
  flex-direction: row;
  background: rgba(0,0,0, .8);
  max-width: 100%;
  padding: 6px 12px;
`;