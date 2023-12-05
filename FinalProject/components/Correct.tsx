import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function Correct({ flagInfo }: { flagInfo: string }) {
  return (
    <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: "green" }}>
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>🏁</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Correct</Text>
      </View>
      <Link href="/" style={styles.link}>
        <Text style={styles.startText}>HOME</Text>
      </Link>
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
    backgroundColor: "green",
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
    backgroundColor: "white",
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
    color: "green",
    textAlign: "center",
    //verticalAlign: "middle",
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
    backgroundColor: "green",
  },
  emoji: {
    fontSize: 150,
  },
});
