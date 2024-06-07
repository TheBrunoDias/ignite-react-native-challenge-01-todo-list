import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Task, TaskProps } from "../../components/Task";
import { EmptyList } from "../../components/EmptyList";


export function Home() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<TaskProps[]>([]);

  const completedTodosLength = todoList.filter(item => item.complete).length;

  function handleAddToList() {
    const alreadyInList = todoList.find(item => item.task === todo);

    if (alreadyInList) {
      return Alert.alert('Tarefa já cadastrada');
    }

    setTodoList(prevState => [...prevState, { task: todo, complete: false }]);
    setTodo('');
  }

  function handleToogleTodo(task: string) {
    const newTodoList = todoList.map(item => ({
      ...item,
      complete: item.task === task ? !item.complete : item.complete
    }));

    setTodoList(newTodoList)
  }

  function handleDeleteTodo(task: string) {
    const newList = todoList.filter(item => item.task !== task);

    setTodoList(newList);
  }

  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor={'#808080'} value={todo} onChangeText={setTodo} />
          <TouchableOpacity disabled={todo.length === 0} style={styles.button} onPress={handleAddToList}>
            <AntDesign name="pluscircleo" size={16} color={'#F2F2F2'} />
          </TouchableOpacity>
        </View>

        <View style={styles.listHeaderContainer}>
          <View style={styles.listHeaderContent}>
            <Text style={styles.listHeaderContentCreatedText}>Criadas</Text>
            <Text style={styles.listHeaderContentNumber}>{todoList.length}</Text>
          </View>
          <View style={styles.listHeaderContent}>
            <Text style={styles.listHeaderContentCompletedText}>Concluídas</Text>
            <Text style={styles.listHeaderContentNumber}>{completedTodosLength}</Text>
          </View>
        </View>

        <FlatList
          data={todoList}
          keyExtractor={key => key.task}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              task={item}
              handleDeleteTodo={() => handleDeleteTodo(item.task)}
              handleToogleTodo={() => handleToogleTodo(item.task)}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />


      </View >
    </>
  )
}