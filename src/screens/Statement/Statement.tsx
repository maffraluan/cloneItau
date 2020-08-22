import React from 'react'
import { Header, StatementTab, ButtonDate } from '../../components/'
import { ScrollView, View, Text } from 'react-native'
import { styles } from './styles'
import { TouchableHighlight } from 'react-native-gesture-handler'


const Statement: React.FC = () => {
   
    return (
        <>
            <Header
                name="Luan" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}>
                <View style={styles.viewValues}>
                    <Text style={styles.textStatement}>saldo em conta</Text>
                    <Text style={styles.textValue}>R$ 700.000,01</Text>
                </View>
                <StatementTab />

                <View style={styles.alignFace}>
                    <Text style={styles.fontFace}>
                        {":)"}
                        </Text>
                    <Text style={styles.fontNormal}>você não possui lançamentos futuros</Text>
                    <Text></Text>
                </View>

                <View style={styles.alignViewDate}>
                    <ButtonDate />

                    <View style={styles.viewStateValue}>
                        <Text style={styles.textBeforeState}>saldo anterior</Text>
                        <Text style={styles.textBeforeValue}>R$ 700.000,01</Text>
                    </View>
                </View>

                <View style={styles.viewSeeMore}>
                    <TouchableHighlight>
                        <Text style={styles.textSeeMore}>ver mais lançamentos</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    )
}

export { Statement };