import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import { Icon } from 'react-native-elements'

import { Container, ViewStatement, ViewShowValue, styles } from './styles'

interface IBoxProps {
    firstTextParam: string,
    secondTextParam: string,
    thirdTextParam: string,
    onPress?: (event: GestureResponderEvent) => void;
}

const Box: React.FC<IBoxProps> = (props, children) => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenBox = () => {
        setIsOpen(isOpen === false);
    };

    return (
        <Container style={styles.containerShadow}>
            <View style={{ flex: 1, }}>
                <View style={styles.mainContent}>
                    <View style={styles.mainHalfOne}>
                        <Text style={styles.halfOneText}>{props.firstTextParam}</Text>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 27,
                            fontWeight: '500',
                            color: '#7D7976',
                        }}>{props.secondTextParam}</Text>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={isOpenBox}>
                        <View style={styles.mainHalfTwo}>
                            <Text style={styles.halfTwoText}>{!isOpen ? "expandir" : "ocultar"}</Text>
                            <Icon style={{ marginLeft: 5, }} name={!isOpen ? "down" : "up"} type="antdesign" size={12} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <ViewShowValue>
                    {isOpen && props.children}
                </ViewShowValue>

                <ViewStatement isOpen={isOpen}>
                    <Text style={styles.textStatement}>{props.thirdTextParam}</Text>
                </ViewStatement>
            </View>
        </Container>
    )
}

export { Box }