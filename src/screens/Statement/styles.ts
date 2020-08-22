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
    alignFace: {
        flex: 1,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontFace: {
        fontSize: 70,
        fontWeight: '300',
        color: '#8a919c'
    },
    fontNormal: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
        color: '#8a919c'
    },
    alignViewDate: {
        flex: 1,
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    viewStateValue: {
        flexDirection: 'row',
        minWidth: 200,
        width: 'auto',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EEE9E5',
        backgroundColor: '#EEE9E5',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,

        elevation: 5,
    },
    textBeforeState: {
        fontSize: 18,
        fontWeight: '300',
    },
    textBeforeValue: {
        marginLeft: 6,
        fontSize: 16, 
        color: '#008000', 
        fontWeight: '400'
    },
    viewSeeMore: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSeeMore: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#145482'
    },

})

export { Header, styles }