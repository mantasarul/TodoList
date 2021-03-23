import React, { useState } from 'react';
import Head from './components/Head'
import AndriodSafeArea from './components/AndriodSafeArea';
import { Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on swtich', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);

    });
  }


  const submitHandler = (text) => {
    if (text.length > 3) {

      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random.toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('Opps!', 'Todos must be over 3 character long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('touched and dismissed');
    }}>
      <AndriodSafeArea>
        <Head title='To Do List' />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem 
              item={item} 
              pressHandler={pressHandler}
              renderRightActions={() => <View style={styles.redbox}></View>}
              />
            )}
          />
        </View>
      </AndriodSafeArea>
    </TouchableWithoutFeedback >
  );

}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    margin: 10,
  },
  list: {
    fontSize: 20,
    borderStyle: 'dashed',
    borderColor: '#F44336',

  },
  redbox: {
    backgroundColor: 'red',
    width: 80,
  }
})
