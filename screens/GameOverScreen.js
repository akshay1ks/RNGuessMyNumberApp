import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ attempts, userNumber, onStartNewGame }) {
    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.attemptsText}>{attempts}</Text> rounds 
                to guess the number <Text style={styles.userNumberText}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
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
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    attemptsText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
    userNumberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});

export default GameOverScreen;