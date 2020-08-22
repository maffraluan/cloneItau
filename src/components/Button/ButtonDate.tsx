import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

const ButtonDate: React.FC = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <>
            <View style={styles.viewDateButton}>
                <Text style={styles.fontDate}>{`${date.getDate()} de ${months[date.getMonth()]}`}</Text>
            </View>
        </>
    )
}

export { ButtonDate }