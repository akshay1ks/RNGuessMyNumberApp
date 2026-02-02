import { View, Text, StyleSheet } from 'react-native';

function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.text}>Number of attempts: {props.attempts}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default GameOverScreen;