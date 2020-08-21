import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

const ValueBox: React.FC = () => {
    return (
        <View>
            <Text style={styles.textValueBox}>R$ 700.000,01</Text>
        </View>
    )
}

export { ValueBox }