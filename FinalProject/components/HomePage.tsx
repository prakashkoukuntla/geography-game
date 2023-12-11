import React from "react";
import { Button, StyleSheet, Image, SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

const grey = "#cececd";

export default function HomePage({ flagInfo }: { flagInfo: string }) {
  function ButtonPress(countryName: string) {}
  return (
    <SafeAreaView
      style={{ backgroundColor: grey, flex: 1, alignSelf: "stretch" }}
    >
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: grey }}>
        <View style={styles.imageContainer}>
          <Text style={styles.emoji}>🏁</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Flagship Trivia</Text>
        </View>
        <View style={styles.link}>
          <Link href="/two" style={{ flex: 1 }}>
            <Text style={styles.startText}>START</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
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
    backgroundColor: grey,
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
    flexDirection: "row",
    borderRadius: 40,
    margin: 10,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#6eaa6b",
    padding: 10,
  },
  startText: {
    fontSize: 50,
    fontFamily: "Times New Roman",
    color: "white",
    textAlign: "center",
  },
  imageContainer: {
    flex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: grey,
  },
  emoji: {
    fontSize: 150,
  },
});
