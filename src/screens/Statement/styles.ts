import styled from 'styled-components/native' 
import { StyleSheet } from 'react-native'

const Header = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const styles = StyleSheet.create({
    viewValues: {
        width: "100%",
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: "#EEE9E5"
    },
    textStatement: {
        marginLeft: 25,
        fontWeight: '600',
        fontSize: 18,
    },
    textValue: {
        marginRight: 60,
        fontSize: 18, 
        color: '#008000', 
        fontWeight: '300'
    },
    viewTabs: {
        width: "100%",
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",

        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: "#EEE9E5"
    }
})

export { Header, styles }