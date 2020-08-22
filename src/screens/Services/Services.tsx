import React from 'react'
import { Header, TextAndBox} from '../../components/'
import { Text } from 'react-native'
import { } from './styles'

interface IServicesProps {}

const Services: React.FC<IServicesProps> = () => {
    return (
        <>
            <Header name="Luan" />
            <TextAndBox 
                firstText="nossos serviços"
                secondText="disponíveis para você"
                boxText="Peça já o seu cartão de crédito. Toque aqui."
                name="card-bulleted-outline"
                type="material-community"
                size={40}
                color="#fff"
            />
        </>
    )
}

export { Services };