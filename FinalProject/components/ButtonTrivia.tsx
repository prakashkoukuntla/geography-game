import React from "react";
import { Button, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function ButtonTrivia({ flagInfo }: { flagInfo: string }) {
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
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {flagInfo}
        </Text>
        <View style={styles.buttonRow}>
          <Button onPress={() => {}} title="Button 1" />
          <Button onPress={() => {}} title="Button 2" />
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={() => {}} title="Button 3" />
          <Button onPress={() => {}} title="Button 4" />
        </View>
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
    justifyContent: "space-between",
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
    color: "#f00",
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
