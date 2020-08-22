import React from 'react'
import { Header, TextAndBox } from '../../components/'
import { Text } from 'react-native'
import { } from './styles'

interface ITransitionsProps {
}

const Transitions: React.FC<ITransitionsProps> = (props) => {
    const date = new Date();
    return (
        <>
            <Header name="Luan" />
            <TextAndBox 
                firstText={`hoje, dia ${date.getDate()}`}
                secondText="o que deseja fazer?"
                boxText="Peça seu cartão de crédito e aproveite descontos em parceiros."
                name="card-text-outline"
                type="material-community"
                size={40}
                color="#fff"
            />
        </>
    )
}

export { Transitions };