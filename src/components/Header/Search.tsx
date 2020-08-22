import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

interface ISearchProps {
    style?: object,
}

const Search: React.FC<ISearchProps> = (props) => {
    return (
        <>
            <TextInput
                style={[styles.textInput, props.style]}
                placeholder="nome, conta, ajuda..."
                placeholderTextColor="#000" />
        </>
    )
}

export { Search }