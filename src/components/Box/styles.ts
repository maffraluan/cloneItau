import styled from 'styled-components/native'
import { StyleSheet } from 'react-native';

const Container = styled.View`
    width: 90%;
    height: auto;
    min-height: 180px;
    background-color: #fff;
    border-radius: 5px;
`;

const styles = StyleSheet.create({
    containerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    mainContent: {
        flex: 1, 
        flexDirection: 'row',
    },
    mainHalfOne: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    halfOneText: {
        fontSize: 27,
        paddingTop: 28,
        fontWeight: '500',
        color: '#7D7976',
    },
    mainHalfTwo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '30%',
    }, 
    halfTwoText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#7D7976',
    },
    viewStatement: {
        width: '100%',
        height: '40%',
        justifyContent: 'center'
    },
    textStatement: {
        paddingLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#145482'
    }
})

export { Container, styles }