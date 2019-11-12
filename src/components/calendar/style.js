import styled from 'styled-components';

function setBackground(prop) {
  if(prop.isBooked) return 'yellow';
  if(prop.isToday) return 'green';
  if(prop.isActive) return 'pink';
  if(prop.isFromDay || prop.isToDay) return 'brown';
  if(prop.isSelected) return 'blue';
  return '#333';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ isActive }) => isActive ? '1px 1px 1px rgba(0,0,0 .6)' : '0 rgba(0,0,0 0)'};
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
  background: ${setBackground};
  color: white;
`;

export const Week = styled.div`
  display: flex;
`;

export const Month = styled.div`
  display: flex;
  justify-content: center;
`;

