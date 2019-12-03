import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: arial;
    font-size: 1em;
  }
`