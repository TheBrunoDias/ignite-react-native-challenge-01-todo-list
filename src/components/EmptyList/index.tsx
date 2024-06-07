import { Image, Text, View } from "react-native";
import { styles } from "./style";

export function EmptyList(){
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Clipboard.png')} width={56} height={56}/>
      <Text style={styles.boldText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}