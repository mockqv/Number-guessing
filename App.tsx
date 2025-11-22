import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { height, width } from "./src/constants/measures";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import getRandomIntInclusive from "./src/functions/getRandomInt";
import checkTrie from "./src/functions/checkTrie";
import restart from "./src/functions/restart";
import { Objective } from "./src/interfaces/objective";
import { colors } from "./src/themes/colors";
import Keyboard from "./src/components/Keybord";

export default function App() {
  const [objective, setObjective] = useState<Objective>({
    objectiveValue: 0,
    touchableButtons: true,
  });

  useEffect(() => {
    setObjective({
      touchableButtons: true,
      objectiveValue: getRandomIntInclusive(0, 999),
    });
  }, [setObjective]);

  const [numberOfTries, setNumberOfTries] = useState<number>(0);
  const [inputNumber, setInputNumber] = useState<string>("");
  const [hint, setHint] = useState<string>("");

  const theme = {
    colors: {
      primary: colors.primary,
      background: colors.background,
    },
  };

  const handleCheck = () => {
    checkTrie(
      Number(inputNumber),
      objective,
      setHint,
      setNumberOfTries,
      numberOfTries,
      setInputNumber,
      setObjective
    );
  };

  const handleRestart = () => {
    restart(setNumberOfTries, setObjective, setHint, setInputNumber);
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {hint === "It's Correct" ? (
          <Text style={styles.CorrectSentence}>Congratulations!</Text>
        ) : (
          <Text style={styles.Title}>Guess the number</Text>
        )}
        <TextInput
          mode="outlined"
          disabled={true}
          style={styles.InputTrie}
          outlineColor={colors.secondary}
          placeholder={inputNumber?.toString()}
          placeholderTextColor={colors.text}
        />
        <Text
          style={styles.TriesText}
          children={`number of tries: ${numberOfTries}`}
        />

        {hint !== "" && <Text children={hint} style={styles.TriesText} />}

        <Keyboard
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          handleCheck={handleCheck}
          handleRestart={handleRestart}
          touchableButtons={objective.touchableButtons}
        />
        <StatusBar style="light" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  InputTrie: {
    backgroundColor: colors.background,
    width: width * 0.5,
  },
  Title: {
    color: colors.title,
    fontSize: 36,
  },
  CorrectSentence: {
    color: colors.correct,
    fontSize: 36,
  },
  TriesText: {
    fontSize: 20,
    color: colors.text,
  },
});
