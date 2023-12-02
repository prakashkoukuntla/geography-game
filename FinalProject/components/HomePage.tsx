import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function HomePage({ flagInfo }: { flagInfo: string }) {
  function ButtonPress(countryName: string) {}
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.flagImage}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.getStartedText}>Flagship Trivia </Text>
        <Link href="/two" asChild>
          <Pressable>
            <Text style={styles.getStartedText}>Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "red",
  },
  flagImage: {
    resizeMode: "contain",
    height: 100,
    width: 200,
    backgroundColor: "green",
  },
});
