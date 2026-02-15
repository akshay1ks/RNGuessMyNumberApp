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
        borderWidth: 3,
        borderColor: Colors.accent700,
        width: 150,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: 36,
        color: Colors.accent700,
    },
});