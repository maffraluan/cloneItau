import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Container, styles } from './styles'

import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IHeaderProps {
    name: string,
    isHome?: boolean,
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    return (
        <>
            <Container>
                <View style={styles.mainView}>
                    <View style={styles.boxRounded}>
                        <Text style={styles.boxText}>LM</Text>
                    </View>
                    <View style={styles.viewNamed}>
                        <Text style={styles.textNamed}>olá, {props.name}</Text>
                        <Text style={styles.textAgCc}>ag 0000 c/c 00000-0</Text>
                    </View>

                    <View style={styles.viewIcon}>
                        {!props.isHome &&
                            <TouchableOpacity>
                                <Icon name="list" type="ionicons" color="#ec7404" size={36} />
                            </TouchableOpacity>}

                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <Icon name="search1" type="antdesign" color="#ec7404" size={36} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        </>
    )
}

export { Header }