import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Incorrect from "../../components/Incorrect";

export default function IncorrectScreen() {
  return (
    <View style={styles.container}>
      <Incorrect flagInfo="app/(tabs)/Incorrect.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
