import styled from 'styled-components/native'
import { StyleSheet } from 'react-native';

interface ViewStatement { isOpen: boolean };

interface ViewShowValue { isOpen?: boolean };

export const Container = styled.View`
    width: 90%;
    height: auto;
    min-height: 180px;
    background-color: #fff;
    border-radius: 5px;
`;

export const ViewStatement = styled.View<ViewStatement>`
    width: 100%;
    padding-bottom: ${({ isOpen }) => !isOpen ? "20px" : "10px"};
    height: ${({ isOpen }) => !isOpen ? "40%" : "30%"};
    justify-content: center;
`;

export const ViewShowValue = styled.View<ViewShowValue>`
        padding-left: 30;
        height: ${({ isOpen }) => !isOpen ? "15%" : "0px"};
        justify-content: center;
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
    textStatement: {
        paddingLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#145482'
    },


    // VALUEBOX STYLES
    textValueBox: {
        fontSize: 18, 
        color: '#008000', 
        fontWeight: '300'
    },

    // TextAndBOX Styles
    mainViewBox: {
        width: '100%',
    },
    viewTextBox: {
        marginTop: 30,
        marginLeft: 20,
    },
    textDate: {
        fontSize: 28,
        fontWeight: '400',
        color: '#ec7404',
    },
    textTodo: {
        fontSize: 28,
        fontWeight: '400',
    },
    viewBox: {
        width: '90%',
        minHeight: 60,
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,

        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ec7404',
    },
    textIcon: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'left',
        paddingHorizontal: 20,
        color: '#fff',
    },
 })

export { styles }