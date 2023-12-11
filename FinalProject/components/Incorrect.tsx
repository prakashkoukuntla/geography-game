import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import { SafeAreaView } from "react-native";

const red = "#db5856";
const darkRed = "#521918";

export default function Incorrect() {
  const locals = useLocalSearchParams();
  return (
    <SafeAreaView
      style={{ flex: 1, alignSelf: "stretch", backgroundColor: red }}
    >
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: red }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.flagContainer}
            source={{
              uri: locals.flagInfo,
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Incorrect</Text>
          <Text style={styles.countryText}>Country: {locals.isCorrect}</Text>
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
    backgroundColor: red,
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
    backgroundColor: red,
  },
  emoji: {
    fontSize: 175,
  },
  flagContainer: {
    flex: 1,
    aspectRatio: 3 / 2,
    borderColor: darkRed,
    borderWidth: 15,
  },
});
