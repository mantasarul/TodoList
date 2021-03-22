import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add Todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color="#AD1457" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})

export default AddTodo;