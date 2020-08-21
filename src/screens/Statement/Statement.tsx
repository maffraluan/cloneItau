import React from 'react'
import { Header } from '../../components/Header'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IStatementProps { }

const Statement: React.FC<IStatementProps> = () => {
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
                    <View style={styles.viewTabs}> 
                        <TouchableOpacity>
                            <Text>tudo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>entrada</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>saída</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>futuro</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </>
    )
}

export { Statement };