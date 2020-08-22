import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

interface ICardProps {
    textPay: string,
    name: string,
    type: any,
    size?: number,
    color: string,
    style?: object,
}

const Card: React.FC<ICardProps> = (props) => {
    return (
        <>
            <TouchableOpacity>
                <View style={[styles.mainViewCard, props.style]}>
                    <View style={styles.viewCard}>
                        <Icon name={props.name} color={props.color} type={props.type} size={props.size} />
                        <Text style={styles.textPayAccount}>{props.textPay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export { Card }