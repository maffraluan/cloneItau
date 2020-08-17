import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    return (
        <Header>
            <Text>Home screen</Text>
        </Header>
    )
}

export { Home };