import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IStatementTabProps {}

const StatementTab: React.FC<IStatementTabProps> = () => {
    return (
        <>
            <View style={styles.viewTabs}>
                <TouchableOpacity>
                    <Text style={styles.text}>tudo</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>entrada</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>saída</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>futuro</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export { StatementTab }