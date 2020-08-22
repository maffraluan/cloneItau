import React from 'react'
import { Header, TextAndBox, Card } from '../../components/'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'
import { Cards } from './Helpers'

interface ITransitionsProps {
}

const Transitions: React.FC<ITransitionsProps> = (props) => {
    const date = new Date();

    return (
        <>
            <Header name="Luan" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}>
                <TextAndBox
                    firstText={`hoje, dia ${date.getDate()}`}
                    secondText="o que deseja fazer?"
                    boxText="Peça seu cartão de crédito e aproveite descontos em parceiros."
                    name="card-text-outline"
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

export { Transitions };