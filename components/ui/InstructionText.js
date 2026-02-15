import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text> 
        //here style prop overrides the default style of instructionText if provided, otherwise it uses the default style
        //because of the order of styles in the array, the later styles will override the earlier ones if there are any conflicts
    );
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});

export default InstructionText;