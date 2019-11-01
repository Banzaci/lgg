import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Weekday = styled.div`
  display: flex;
`;

export const Empty = styled.div`
  display: flex;
  background: grey;
  padding: 12px;
  margin: 1px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const Day = styled(Empty)`
  background: ${({ isActive }) => console.log('----------isActive', isActive) || isActive ? 'green' : 'blue'};
  color: white;
`;

export const Week = styled.div`
  display: flex;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
`;