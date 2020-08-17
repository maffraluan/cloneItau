import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'

interface IServicesProps {}

const Services: React.FC<IServicesProps> = () => {
    return (
        <Header>
            <Text>Services screen</Text>
        </Header>
    )
}

export { Services };