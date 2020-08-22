import styled from 'styled-components/native' 
import { StyleSheet } from 'react-native'

const Header = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const styles = StyleSheet.create({
    viewCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
    },
})

export { Header, styles }