import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'
import { Icon } from 'react-native-elements'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    return (
        <Header>
            <Icon name="rowing" />
        </Header>
    )
}

export { Home };