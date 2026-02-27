import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaExemplos from "../exemplos/lista-exemplos";

import Exemplo01 from "../exemplos/ex01";
import Exemplo02 from "../exemplos/ex02";
import Exemplo03 from "../exemplos/ex03";
import Exemplo04 from "../exemplos/ex04";
import Exemplo05 from "../exemplos/ex05";
import Exemplo06 from "../exemplos/ex06";
import Exemplo07 from "../exemplos/ex07";
import Exemplo08 from "../exemplos/ex08";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ListaExemplos} />
      <Stack.Screen name="Exemplo1" component={Exemplo01} />
      <Stack.Screen name="Exemplo2" component={Exemplo02} />
      <Stack.Screen name="Exemplo3" component={Exemplo03} />
      <Stack.Screen name="Exemplo4" component={Exemplo04} />
      <Stack.Screen name="Exemplo5" component={Exemplo05} />
      <Stack.Screen name="Exemplo6" component={Exemplo06} />
      <Stack.Screen name="Exemplo7" component={Exemplo07} />
      <Stack.Screen name="Exemplo8" component={Exemplo08} />
    </Stack.Navigator>
  );
}

export default RootStack;
