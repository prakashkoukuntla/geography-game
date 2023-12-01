import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import WebView from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { Themes } from "../assets/Themes";

export default function External() {
  const params = useLocalSearchParams();
  const url = params.eURL;
  console.log(url);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: "Song Details",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <WebView style={styles.external} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Themes.colors.background,
  },
  external: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
