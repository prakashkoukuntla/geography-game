import React from "react";
import { StyleSheet, Image, SafeAreaView, Pressable } from "react-native";
import { router } from "expo-router";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import backend from "../app/backend";

const grey = "#cececd";
const darkGrey = "#7d7d7d";

const right_or_wrong = (choice: number, correct: number) => {
  if (choice == correct) {
    return 1;
  } else {
    return 0;
  }
};

export default function ButtonTrivia({ flagInfo }: { flagInfo: string }) {
  let data = backend(); // randomize button order
  let correct_answer: number = Math.floor(Math.random() * 4);
  let temp = data[1][correct_answer];
  data[1][correct_answer] = data[1][0];
  data[1][0] = temp;

  return (
    <SafeAreaView
      style={{ flex: 1, alignSelf: "stretch", backgroundColor: grey }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.flagContainer}
          source={{
            uri: data[0],
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Which country does the flag belong to?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, { backgroundColor: "#FFAEBC" }]}>
          <Pressable
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
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>{data[1][0]}</Text>
          </Pressable>
        </View>
        <View style={[styles.button, { backgroundColor: "#A0E7E5" }]}>
          <Pressable
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
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>{data[1][1]}</Text>
          </Pressable>
        </View>
        <View style={[styles.button, { backgroundColor: "#B4F8C8" }]}>
          <Pressable
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
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>{data[1][2]}</Text>
          </Pressable>
        </View>
        <View style={[styles.button, { backgroundColor: "#FBE7C6" }]}>
          <Pressable
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
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>{data[1][3]}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    width: "80%",
    justifyContent: "center",
    backgroundColor: grey,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 20,
    padding: 7,
    fontFamily: "Times New Roman",
    //fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: grey,
  },
  flagContainer: {
    flex: 1,
    aspectRatio: 3 / 2,
    borderColor: darkGrey,
    borderWidth: 15,
  },
  buttonContainer: {
    flex: 1,
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
  buttonPress: {
    //backgroundColor: "red",
    flex: 1,
  },
});
