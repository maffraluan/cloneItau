import styled from 'styled-components/native';

const Container = styled.View`
  background: ${({ focused }) => focused ? '#fff' : "transparent"};
  padding: ${({ focused }) => focused ? '3px 7px' : "3px 0"};
  height: 100%;
  border-radius: 5px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: ${({ color }) => color};
  margin-top: 2px;
  text-align: center;
`;


export { Container, Label }