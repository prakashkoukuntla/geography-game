import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Correct from "../../components/Correct";

export default function CorrectScreen() {
  return (
    <View style={styles.container}>
      <Correct />
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
