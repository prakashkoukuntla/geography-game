import React from "react";
import { Button, StyleSheet, Image, SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

const green = "#6eaa6b";

export default function Correct({ flagInfo }: { flagInfo: string }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignSelf: "stretch", backgroundColor: green }}
    >
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: green }}>
        <View style={styles.imageContainer}>
          <Text style={styles.emoji}>🏁</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Correct</Text>
          <Text style={styles.countryText}>Country: </Text>
        </View>
        <View style={styles.newView}>
          <Link href="/two" style={styles.newLink}>
            <Text style={styles.newText}>New Question</Text>
          </Link>
        </View>
        <View style={styles.homeView}>
          <Link href="/" style={styles.homeLink}>
            <Text style={styles.homeText}>Home</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 3,
    flexDirection: "column",
    alignSelf: "stretch",
    textAlign: "center",
    margin: 10,
    alignItems: "center",
    backgroundColor: green,
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
  countryText: {
    fontSize: 25,
    fontFamily: "Times New Roman",
    fontWeight: "normal",
  },
  homeLink: {
    flex: 1,
  },
  homeView: {
    flexDirection: "row",
    borderRadius: 40,
    margin: 10,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 10,
  },
  homeText: {
    flex: 1,
    fontSize: 40,
    fontFamily: "Times New Roman",
    color: "black",
    textAlign: "center",
    alignSelf: "center",
  },
  newLink: {
    flex: 1,
  },
  newView: {
    flexDirection: "row",
    borderRadius: 40,
    marginHorizontal: 10,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
  },
  newText: {
    flex: 1,
    fontSize: 40,
    fontFamily: "Times New Roman",
    color: "black",
    textAlign: "center",
    alignSelf: "center",
  },
  imageContainer: {
    flex: 3,
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: green,
  },
  emoji: {
    fontSize: 175,
  },
});
