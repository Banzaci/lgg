import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Weekdays = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: flex;
`;

export const MonthName = styled.h3`
  font-weight: bold;
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Empty = styled.div`
  display: flex;
  background: #EEE;
  color: #CCC;
  padding: 12px;
  margin: 1px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const Weekday = styled(Empty)`
  display: flex;
  color: white;
  background: #000;
`;

export const Day = styled(Empty)`
  background: ${({ isActive }) => isActive ? '#333' : '#BBB'};
  color: white;
`;

export const Week = styled.div`
  display: flex;
`;

export const Month = styled.div`
  display: flex;
  justify-content: center;
`;