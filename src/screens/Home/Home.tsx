import React from 'react'
import { Header, Box, ListView } from '../../components'
import { View, Text, ScrollView } from 'react-native'
import { Content, styles } from './styles'

interface IHomeProps { }

const ChildrenBox = () => {
    return (
        <View>
            <Text style={{ fontSize: 18, color: '#008000', fontWeight: '300'}}>R$ 700.000,01</Text>
        </View>
    )
}

const Home: React.FC<IHomeProps> = () => {
    return (
        <>
            <Header name="Luan" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}>
                <Content>
                    <Box
                        firstTextParam="saldo em conta"
                        secondTextParam="corrente"
                        thirdTextParam="ver extrato"
                        children={<ChildrenBox />}
                    />
                    <ListView />

                    <View style={styles.boxContent}>
                        <Box
                            firstTextParam="meus"
                            secondTextParam="investimentos"
                            thirdTextParam="ver detalhes"
                        />
                    </View>
                </Content>
            </ScrollView>
        </>
    )
}

export { Home };