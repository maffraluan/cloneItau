import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, styles } from './styles'
import { Search } from './Search'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

interface IHeaderProps {
    name: string,
    isHome?: boolean,
};

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const [isHidden, setIsHidden] = useState(false);

    const navigator = useNavigation();

    const handleOpenSearch = () => {
        setIsHidden(!isHidden);
    };

    return (
        <>
            <Container>
                <View style={styles.mainView}>
                    <View style={styles.boxRounded}>
                        <Text style={styles.boxText}>LM</Text>
                    </View>
                    {isHidden ? <Search /> :
                        <View style={styles.viewNamed}>
                            <Text style={styles.textNamed}>olá, {props.name}</Text>
                            <Text style={styles.textAgCc}>ag 0000 c/c 00000-0</Text>
                        </View>}

                    <View style={styles.viewIcon}>
                        {!props.isHome &&
                            <TouchableOpacity
                                onPress={() => navigator.navigate('ajuda')}>
                                <Icon name="list" type="ionicons" color="#ec7404" size={36} />
                            </TouchableOpacity>}

                        <TouchableOpacity
                            onPress={() => handleOpenSearch()}
                            style={{ marginLeft: 10, }}>
                            <Icon name="search1" type="antdesign" color="#ec7404" size={36} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        </>
    )
}

export { Header }