import { StyleSheet } from 'react-native';
import { height, width } from '../../constants/measures';
import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
  NumberPad: {
    width: width * 0.5,
    height: height * 0.5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: height * 0.0075,
  },
  CheckButton: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.primary,
  },
  EraseButton: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.error,
  },
  RestartButton: {
    width: width * 0.1,
    height: height * 0.1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.background,
  },
});

export default styles;
