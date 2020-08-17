import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'

interface IHelpProps {}

const HelpScreen: React.FC<IHelpProps> = () => {
    return (
        <Header>
            <Text>Help screen</Text>
        </Header>
    )
}

export { HelpScreen };