import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./style";

export type TaskProps = {
  task: string;
  complete: boolean;
}

type Props = {
  task: TaskProps,
  handleToogleTodo: () => void;
  handleDeleteTodo: () => void;
}

export function Task({ task, handleDeleteTodo, handleToogleTodo }: Props) {

  return (
    <View style={styles.container}>
      <Checkbox
        color={task.complete ? '#5E60CE' : '#4EA8DE'}
        style={[styles.checkbox,]}
        value={task.complete}
        onValueChange={handleToogleTodo}

      />
      <Text style={[styles.text, task.complete ? styles.textDashed : null]}>{task.task}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeleteTodo}>
        <Ionicons name="trash-outline" size={16} color={'#808080'} />
      </TouchableOpacity>
    </View>
  );
}