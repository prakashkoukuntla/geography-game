import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function Incorrect({ flagInfo }: { flagInfo: string }) {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "red",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.flagContainer}
        source={{
          uri: "https://flagsapi.com/BR/flat/64.png",
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Incorrect</Text>
      </View>
      <View style={styles.newLink}>
        <Link href="/two">
          <Text style={styles.newText}>New Question</Text>
        </Link>
      </View>
      <View style={styles.link}>
        <Link href="/">
          <Text style={styles.homeText}>HOME</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
    flexDirection: "column",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  link: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "stretch",
    //margin: 5,
    marginTop: 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    fontSize: 80,
    fontFamily: "Times New Roman",
    color: "black",
    textAlign: "center",
  },
  newLink: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "stretch",
    //marginTop: 10,
    //margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  newText: {
    fontSize: 45,
    fontFamily: "Times New Roman",
    //color: "red",
    textAlign: "center",
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
    backgroundColor: "red",
  },
  flagContainer: {
    flex: 1.5,
    aspectRatio: 5 / 3,
    marginTop: 50,
    outline: 5,
    outlineColor: "black",

    //flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "center",
    //alignSelf: "stretch",
  },
  emoji: {
    fontSize: 175,
  },
});
