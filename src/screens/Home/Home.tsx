import React from 'react'
import { Header, Box, ListView, ValueBox, } from '../../components'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Content, styles } from './styles'


const Home: React.FC = () => {
    const navigator = useNavigation();

    return (
        <>
            <Header name="Luan" isHome={true}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}>
                <Content>
                    <Box
                        firstTextParam="saldo em conta"
                        secondTextParam="corrente"
                        thirdTextParam="ver extrato"
                        children={<ValueBox />}
                        hasDivider={true}
                        onPress={() => navigator.navigate('extrato')}
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