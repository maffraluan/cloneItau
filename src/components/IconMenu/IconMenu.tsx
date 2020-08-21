import React from 'react'
import { Icon } from 'react-native-elements'

import { Container, Label } from './styles'

interface IconMenuProps {
  focused: boolean,
  name: string,
  type: any,
  size?: number,
  color: string,
  label: string,
}

const IconMenu: React.FC<IconMenuProps> = (props) => {
  const { focused, color, name, type, size = 28, label } = props;
  
    return (
        <Container focused={focused}>
          <Icon
            name={name}
            type={type}
            color={color}
            size={size} 
          />
          {!focused && <Label color={color}>{label}</Label>}
        </Container>
    );
}

export { IconMenu }