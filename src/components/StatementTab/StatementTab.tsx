import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IStatementTabProps {}

const StatementTab: React.FC<IStatementTabProps> = () => {
    return (
        <>
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
        </>
    )
}

export { StatementTab }