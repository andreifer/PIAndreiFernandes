import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const SobreScreen = ({ navigation }) => {
  return (
    <View
        style={styles.container}
    >
      <Text>Sou o SOBRE👑🧠</Text>
      <Button
        title="Vá para o INFERNO rsrs"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};