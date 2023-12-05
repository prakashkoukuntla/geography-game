import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function HomePage({ flagInfo }: { flagInfo: string }) {
  function ButtonPress(countryName: string) {}
  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>🏁</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Flagship Trivia</Text>
      </View>
      <View style={styles.link}>
        <Link href="/two" asChild>
          <Text style={styles.startText}>START</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
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
    fontSize: 50,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  link: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  startText: {
    fontSize: 80,
    fontFamily: "Times New Roman",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  imageContainer: {
    flex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 150,
  },
});
