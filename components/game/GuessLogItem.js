import { View, StyleSheet } from 'react-native';
import InstructionText from '../ui/InstructionText';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <InstructionText style={styles.roundNumberText}>#{roundNumber}</InstructionText>
            <InstructionText style={styles.roundNumberText}>Opponent's Guess: {guess}</InstructionText>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent800,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
    roundNumberText: {
        paddingHorizontal: 6,
        fontFamily: 'open-sans',
        color: Colors.primary800,
        fontSize: 16,
    },
});

export default GuessLogItem;