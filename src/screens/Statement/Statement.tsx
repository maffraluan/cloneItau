import React from 'react'
import { Text } from 'react-native'
import { Header } from './styles'

interface IStatementProps {}

const Statement: React.FC<IStatementProps> = () => {
    return (
        <Header>
            <Text>Statement screen</Text>
        </Header>
    )
}

export { Statement };