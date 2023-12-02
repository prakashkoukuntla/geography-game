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
      <View style={styles.buttonContainer}>
        <Text style={styles.titleText}>Flagship Trivia</Text>
        <Link href="/two" asChild>
          <Pressable>
            <Text style={styles.startText}>START</Text>
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
  titleText: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Times New Roman",
  },
  startText: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    textAlign: "center",
    color: "blue",
    padding: 20,
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
  },
  flagImage: {
    resizeMode: "contain",
    height: 100,
    width: 200,
  },
});
