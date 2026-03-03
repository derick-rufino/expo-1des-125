import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackExemplos from "./stackExemplos";
import StackAtividades from "./stackAtividades";

function BottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Exemplos"
        component={StackExemplos}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 400,
          },
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={StackAtividades}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 400,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
