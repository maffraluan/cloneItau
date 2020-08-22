import styled from 'styled-components/native' 
import { StyleSheet } from 'react-native'

const Header = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const styles = StyleSheet.create({
    inputHelpScreen: {
        width: '100%',
        borderWidth: 3,
        fontSize: 16,
        fontWeight: '400',
    }
})

export { Header, styles }