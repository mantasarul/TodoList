import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Head({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#880E4F',

    },

    text: {
        fontSize: 30,
        color: '#FAFAFA',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        
    },
})


export default Head;