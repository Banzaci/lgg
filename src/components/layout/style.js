import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  background: #eee;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`