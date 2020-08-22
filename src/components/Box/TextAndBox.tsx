import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Icon } from 'react-native-elements'

interface ITextAndBoxProps {
    firstText: string | object,
    secondText: string,
    boxText: string,
    name: string,
    type: any,
    size?: number,
    color: string,
};

const TextAndBox: React.FC<ITextAndBoxProps> = (props) => {
    return (
        <View style={styles.mainViewBox}>
            <View style={styles.viewTextBox}>
                <Text style={styles.textDate}>{props.firstText}</Text>
                <Text style={styles.textTodo}>{props.secondText}</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={styles.viewBox}>
                        <Icon name={props.name} color={props.color} type={props.type} size={props.size} />
                        <Text style={styles.textIcon}>{props.boxText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { TextAndBox }