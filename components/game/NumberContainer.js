import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent700,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    numberText: {
        fontSize: 36,
        color: Colors.accent700,
        fontWeight: 'bold',
    },
});