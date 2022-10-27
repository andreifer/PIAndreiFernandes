import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";


export const HomeScreen = ({navigation}) => {
  return (
    <View
        style={styles.container}
    >
      <Text>HOME SCREEN👑🧠</Text>
      <Button
        title="Ir para Sobre"
        // Realiza a ação de enviar para tela Sobre
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};