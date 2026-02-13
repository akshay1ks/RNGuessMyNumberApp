import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={onPress} 
            android_ripple={{ color: Colors.primary600 }} 
            style={({ pressed }) => 
            pressed ? [styles.buttonPressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>);
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.75,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 12,
        paddingHorizontal: 24,
        elevation: 2,
    },
    buttonText: {
        color: Colors.accent700,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default PrimaryButton;