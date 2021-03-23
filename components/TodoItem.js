import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function TodoItem({ item, pressHandler, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})

export default TodoItem;