import React, { useState } from 'react'

import { View, Text, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import { Icon, Divider } from 'react-native-elements'

import { Container, ViewStatement, ViewShowValue, styles } from './styles'

interface IBoxProps {
    firstTextParam: string,
    secondTextParam: string,
    thirdTextParam: string,
    onPress?: (event: GestureResponderEvent) => void,
    hasDivider?: boolean,
};


const Box: React.FC<IBoxProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpenBox = () => {
        setIsOpen(!isOpen);
    };

    const renderDivider = () => {
        if (props.hasDivider) {
            return <Divider style={{ marginBottom: 5 }} />
        }
        return null
    };

    return (
        <Container style={styles.containerShadow}>
            <View style={{ flex: 1, }}>
                <View style={styles.mainContent}>
                    <View style={styles.mainHalfOne}>
                        <Text style={styles.halfOneText}>
                            {props.firstTextParam}
                        </Text>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 27,
                            fontWeight: '500',
                            color: '#7D7976',
                        }}>
                            {props.secondTextParam}
                        </Text>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={handleToggleOpenBox}>
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
                    {isOpen && renderDivider()}
                    <TouchableWithoutFeedback
                        onPress={props.onPress}>
                        <Text style={styles.textStatement}>
                            {props.thirdTextParam}
                        </Text>
                    </TouchableWithoutFeedback>
                </ViewStatement>
            </View>
        </Container>
    )
}

export { Box }