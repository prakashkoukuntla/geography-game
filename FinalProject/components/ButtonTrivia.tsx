import React from "react";
import { Button, StyleSheet, Image, SafeAreaView } from "react-native";
import { router } from "expo-router";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import backend from "../app/backend";

const grey = "#cececd";

const right_or_wrong = (choice: number, correct: number) => {
  if (choice == correct) {
    return 1;
  } else {
    return 0;
  }
};

export default function ButtonTrivia({ flagInfo }: { flagInfo: string }) {
  console.log("hello");
  let data = backend(); // randomize button order
  let correct_answer: number = Math.floor(Math.random() * 4);
  let temp = data[1][correct_answer];
  data[1][correct_answer] = data[1][0];
  data[1][0] = temp;

  return (
    <SafeAreaView style={{ backgroundColor: grey }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.flagImage}
          source={{
            uri: data[0],
          }}
        />
      </View>
      <Text style={styles.getStartedText}>
        What is the name of the country that has the flag?
      </Text>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, { backgroundColor: "#FFAEBC" }]}>
          <Button
            onPress={() => {
              0 == correct_answer
                ? router.push({
                    pathname: "/correct",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  })
                : router.push({
                    pathname: "/incorrect",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  });
            }}
            color="black"
            title={data[1][0]}
          />
        </View>
        <View style={[styles.button, { backgroundColor: "#A0E7E5" }]}>
          <Button
            onPress={() => {
              1 == correct_answer
                ? router.push({
                    pathname: "/correct",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  })
                : router.push({
                    pathname: "/incorrect",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  });
            }}
            color="black"
            title={data[1][1]}
          />
        </View>
        <View style={[styles.button, { backgroundColor: "#B4F8C8" }]}>
          <Button
            onPress={() => {
              2 == correct_answer
                ? router.push({
                    pathname: "/correct",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  })
                : router.push({
                    pathname: "/incorrect",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  });
            }}
            color="black"
            title={data[1][2]}
          />
        </View>
        <View style={[styles.button, { backgroundColor: "#FBE7C6" }]}>
          <Button
            onPress={() => {
              3 == correct_answer
                ? router.push({
                    pathname: "/correct",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  })
                : router.push({
                    pathname: "/incorrect",
                    params: {
                      flagInfo: data[0],
                      isCorrect: data[1][correct_answer],
                    },
                  });
            }}
            color="black"
            title={data[1][3]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: grey,
  },
  button: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
    color: "black",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    flex: 1,
    marginHorizontal: 30,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: grey,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: grey,
  },
  flagImage: {
    resizeMode: "contain",
    width: "100%",
    height: "auto",
    aspectRatio: 2 / 1,
  },
});
