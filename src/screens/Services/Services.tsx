import React from 'react'
import { Header, TextAndBox, Card } from '../../components/'
import { ScrollView, View } from 'react-native'
import { Cards } from './Helpers'
import { styles } from './styles'

interface IServicesProps {}

const Services: React.FC<IServicesProps> = () => {
    return (
        <>
            <Header name="Luan" />
            <ScrollView>
            <TextAndBox 
                firstText="nossos serviços"
                secondText="disponíveis para você"
                boxText="Peça já o seu cartão de crédito. Toque aqui."
                name="card-bulleted-outline"
                type="material-community"
                size={40}
                color="#fff"
            />
            <View style={styles.viewCard}>
                    {Cards.map((item) => (
                        <Card
                            key={item.id}
                            textPay={item.textPay}
                            name={item.name}
                            type={item.lib}
                            size={30}
                            color="#ec7404"
                            style={{ height: 160, marginBottom: 20,}}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

export { Services };