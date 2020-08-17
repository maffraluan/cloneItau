import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'

interface ITransitionsProps {}

const Transitions: React.FC<ITransitionsProps> = () => {
    return (
        <Header>
            <Text>Transitions screen</Text>
        </Header>
    )
}

export { Transitions };