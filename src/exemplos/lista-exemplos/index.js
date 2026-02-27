import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function ListaExemplos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplos</Text>

      <TouchableOpacity style={styles.botao}>
        <Text
          style={styles.textoBtn}
          onPress={() => useNavigation.navigate("Exemplo 1")}
        >
          Exemplo 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBtn}>Exemplo 8</Text>
      </TouchableOpacity>
    </View>
  );
}
