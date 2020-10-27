import styled from 'styled-components/native';

interface LabelProps {
  color?: string;
}
interface ContainerProps {
  focused: boolean;
}

const Container = styled.View<ContainerProps>`
  background: ${({focused}) => (focused ? '#fff' : 'transparent')};
  padding: ${({focused}) => (focused ? '3px 7px' : '3px 0')};
  height: 100%;
  border-radius: 5px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

const Label = styled.Text<LabelProps>`
  color: ${({color}) => color};
  margin-top: 2px;
  text-align: center;
`;

export {Container, Label};
