import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import { Container, styles } from './styles'

interface IBoxProps {
    firstTextParam: string,
    secondTextParam: string,
    thirdTextParam: string,
}

const Box: React.FC<IBoxProps> = ({ firstTextParam, secondTextParam, thirdTextParam }) => {
    return (
        <Container style={styles.containerShadow}>
            <View style={{ flex: 1, }}>
                <View style={styles.mainContent}>
                    <View style={styles.mainHalfOne}>
    <Text style={styles.halfOneText}>{firstTextParam}</Text>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 27,
                            fontWeight: '500',
                            color: '#7D7976',
                        }}>{secondTextParam}</Text>
                    </View>

                    <View style={styles.mainHalfTwo}>
                        <Text style={styles.halfTwoText}>expandir</Text>
                        <Icon style={{ marginLeft: 5, }} name="down" type="antdesign" size={12} />
                    </View>
                </View>
                <View style={styles.viewStatement}>
                    <Text style={styles.textStatement}>{thirdTextParam}</Text>
                </View>
            </View>
        </Container>
    )
}

export { Box }