import { StyleSheet } from "react-native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#fafafa",
    flex: 1,
    padding: 20,
  },
  botao: {
    width: "70%",
    padding: 15,
    backgroundColor: "hsl(180, 35%, 77%)",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
  },
  titulo: {
    fontSize: RFPercentage(4),
    fontWeight: "bold",
    marginBottom: 30,
  },
  textoBtn: {
    fontSize: RFPercentage(2),
  },
});

export default styles;
