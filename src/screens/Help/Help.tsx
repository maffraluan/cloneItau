import React from 'react'
import { View } from 'react-native'
import { Header, Search } from '../../components/'

import { styles } from './styles'

const HelpScreen: React.FC = () => {
    return (
        <>
            <Header name="Luan" />
            <View>
                <Search style={styles.inputHelpScreen} />
            </View>
        </>
    )
}

export { HelpScreen };