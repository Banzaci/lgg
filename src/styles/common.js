import styled from 'styled-components';

export const Paragraph = styled.p``;
export const Button = styled.button`
  padding: 0 22px;
  background-color: white;
  border-style: none;
  cursor: pointer;
`;
export const Header = styled.h1``;
export const H2 = styled.h2`
  padding: 0;
  margin: 6px 0;
`;
export const HREF = styled.a``;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
`;

export const Wrapper = styled(Container)`
  margin: 0 auto;
  padding: 10px;
  max-width: 1200px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
`;