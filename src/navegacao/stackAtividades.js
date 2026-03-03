import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaAtividade from "../atividades/lista-atividades";

import Atividade01 from "../atividades/atv01";
import Atividade02 from "../atividades/atv02";
import Atividade03 from "../atividades/atv03";
import Atividade04 from "../atividades/atv04";
import Atividade05 from "../atividades/atv05";
import Atividade06 from "../atividades/atv06";
import Atividade07 from "../atividades/atv07";

const Stack = createNativeStackNavigator();

function StackAtividades() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ListaAtividade} />
      <Stack.Screen name="Atividade1" component={Atividade01} />
      <Stack.Screen name="Atividade2" component={Atividade02} />
      <Stack.Screen name="Atividade3" component={Atividade03} />
      <Stack.Screen name="Atividade4" component={Atividade04} />
      <Stack.Screen name="Atividade5" component={Atividade05} />
      <Stack.Screen name="Atividade6" component={Atividade06} />
      <Stack.Screen name="Atividade7" component={Atividade07} />
    </Stack.Navigator>
  );
}

export default StackAtividades;
