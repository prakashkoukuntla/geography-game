import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import WebView from "react-native-webview";
import { Themes } from "../assets/Themes";
import { StatusBar } from "expo-status-bar";

export default function Preview() {
  const params = useLocalSearchParams();
  const url = params.pURL;
  console.log(url);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: "Song Preview",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <WebView style={styles.preview} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Themes.colors.background,
  },
  preview: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
