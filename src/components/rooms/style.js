import styled from 'styled-components';

function setBackground(prop) {
  if(prop.isBooked) return 'yellow';
  return '#333';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Room = styled.div`
  display: flex;
  width: 100%;
  background: ${setBackground};
`;

export const Header = styled.h1``;
export const Price = styled.span``;
export const Paragraph = styled.p``;
export const Image = styled.div``;