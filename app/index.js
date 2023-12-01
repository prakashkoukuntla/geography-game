import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../../A3 2/utils";
import { Themes } from "../assets/Themes";
import images from "../assets/Images/images";
import { Stack, useRouter } from "expo-router";
import { TrackPage } from "../trackPage";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;
  let track = useSpotifyTracks(token);

  let connectPage = (
    <Pressable style={styles.pressable} onPress={() => getSpotifyAuth()}>
      <StatusBar style="light" />
      <Image style={styles.image_button} source={images.spotify}></Image>
      <Text style={styles.text_button}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );

  if (token) {
    contentDisplayed = <TrackPage track={track} />;
  } else {
    contentDisplayed = connectPage;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {contentDisplayed}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  pressable: {
    backgroundColor: Themes.colors.spotify,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  text_button: {
    color: Themes.colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 4,
  },
  image_button: {
    resizeMode: "contain",
    height: undefined,
    width: 18,
  },
});
