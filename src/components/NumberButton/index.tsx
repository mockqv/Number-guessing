import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import styles from "./styles";

interface Props {
  number: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  numberInput: string;
  disabled: boolean;
}

const NumberButton = (props: Props) => {
  return (
    <Button
      style={styles.Button}
      mode="elevated"
      children={<Text children={props.number} style={styles.NumberText} />}
      onPress={() => {
        props.setInput(props.numberInput + props.number);
      }}
      rippleColor="transparent"
      disabled={props.disabled}
    />
  );
};

export default NumberButton;
