import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-paper';
import NumberButton from '../NumberButton';
import styles from './styles';
import { colors } from '../../themes/colors';
import { width } from '../../constants/measures';

interface KeyboardProps {
  inputNumber: string;
  setInputNumber: (input: string) => void;
  handleCheck: () => void;
  handleRestart: () => void;
  touchableButtons: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  inputNumber,
  setInputNumber,
  handleCheck,
  handleRestart,
  touchableButtons,
}) => {
  return (
    <View style={styles.NumberPad}>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
        <NumberButton
          key={num}
          number={num}
          numberInput={inputNumber}
          setInput={setInputNumber}
          disabled={!touchableButtons}
        />
      ))}
      <Button
        style={styles.EraseButton}
        mode="elevated"
        onPress={() => setInputNumber('')}
        disabled={!touchableButtons}
      >
        X
      </Button>
      <NumberButton
        number="0"
        numberInput={inputNumber}
        setInput={setInputNumber}
        disabled={!touchableButtons}
      />
      <Button
        style={styles.CheckButton}
        mode="elevated"
        onPress={handleCheck}
        disabled={!touchableButtons}
      >
        <Icon size={15} color={colors.text} source="check" />
      </Button>
      <View style={{ width: width * 0.5, alignItems: 'center' }}>
        <Button
          style={styles.RestartButton}
          onPress={handleRestart}
          rippleColor="transparent"
        >
          <Icon size={25} color={colors.text} source="restart" />
        </Button>
      </View>
    </View>
  );
};

export default Keyboard;
