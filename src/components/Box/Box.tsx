import React, { useState } from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { View, Text, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import { Icon, Divider } from 'react-native-elements'

import { Container, ViewStatement, ViewShowValue, styles } from './styles'
import { BottomType } from 'src/navigation/BottomType'

interface IBoxProps {
    firstTextParam: string,
    secondTextParam: string,
    thirdTextParam: string,
    onPress?: (event: GestureResponderEvent) => void,
    hasDivider?: boolean,
};

type Props = BottomTabNavigationProp<BottomType, 'extrato'>

const Box: React.FC<IBoxProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenBox = () => {
        setIsOpen(isOpen === false);
    };

    const handleDivider = () => {
        if (props.hasDivider == true) {
            return <Divider style={{ marginBottom: 5 }} />
        } else {
            return false;
        }
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
                    {isOpen && handleDivider()}
                    <TouchableWithoutFeedback
                        //onPress={() => navigation.navigate('extrato')}
                        >
                        <Text style={styles.textStatement}>{props.thirdTextParam}</Text>
                    </TouchableWithoutFeedback>
                </ViewStatement>
            </View>
        </Container>
    )
}

export { Box }