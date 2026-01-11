import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
    const pressHandler = () => {
        console.log('Pressed!');
    };

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={pressHandler} 
            android_ripple={{ color: '#d9006cff' }} 
            style={({ pressed }) => pressed ? [styles.buttonPressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}>
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
        backgroundColor: '#ba0861ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default PrimaryButton;