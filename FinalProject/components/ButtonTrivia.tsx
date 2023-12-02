import React from "react";
import { Button, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import backend from "../app/backend";

export default function ButtonTrivia({ flagInfo }: { flagInfo: string }) {
  let data = backend();

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.flagImage}
          source={{
            uri: data[0],
          }}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Text style={styles.getStartedText}>
          What is the name of the country that has the flag?
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
  },
  flagImage: {
    resizeMode: "contain",
    height: 100,
    width: 200,
  },
});
