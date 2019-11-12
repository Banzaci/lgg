import styled from 'styled-components';

function setBackgroundProps(prop) {
  if(prop.isBooked) {
    return {
      background: '#DDD',
      color: '#CCC',
    };
  }
  return {
    background: 'white',
    color: 'blue',
  };
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Room = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 12px;
  ${setBackgroundProps};
`;

export const Header = styled.h1``;
export const Price = styled.span``;
export const Paragraph = styled.p``;
export const Image = styled.div``;
export const Button = styled.button``;