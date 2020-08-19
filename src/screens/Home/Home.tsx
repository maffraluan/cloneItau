import React from 'react'
import { Header, Box, ListView } from '../../components'
import { View, ScrollView } from 'react-native'
import { Content, styles } from './styles'

interface IHomeProps { }

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