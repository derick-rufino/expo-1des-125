import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function ListaExemplos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplos</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo1")}
      >
        <Text style={styles.textoBtn}>Exemplo 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo2")}
      >
        <Text style={styles.textoBtn}>Exemplo 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo3")}
      >
        <Text style={styles.textoBtn}>Exemplo 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo4")}
      >
        <Text style={styles.textoBtn}>Exemplo 4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo5")}
      >
        <Text style={styles.textoBtn}>Exemplo 5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo6")}
      >
        <Text style={styles.textoBtn}>Exemplo 6</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo7")}
      >
        <Text style={styles.textoBtn}>Exemplo 7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo8")}
      >
        <Text style={styles.textoBtn}>Exemplo 8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Exemplo9")}
      >
        <Text style={styles.textoBtn}>Exemplo 9</Text>
      </TouchableOpacity>
    </View>
  );
}
