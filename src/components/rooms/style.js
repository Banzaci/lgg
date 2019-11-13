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

export const Room = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 12px;
  ${setBackgroundProps};
`;

export const Price = styled.span``;
export const Image = styled.div``;