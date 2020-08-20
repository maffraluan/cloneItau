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

const IconMenu: React.FC<IconMenuProps> = ({ focused, color, name, type, size = 28, label }) => {
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