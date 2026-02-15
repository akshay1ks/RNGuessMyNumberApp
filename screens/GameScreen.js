import { View, StyleSheet, Alert, FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Title from '../components/ui/Title';
import { useState, useEffect, use } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function randomNumberGenerator(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return randomNumberGenerator(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, setGameIsOver, setGuessRounds }) {
    const initialGuess = randomNumberGenerator(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRoundsList, setGuessRoundsList] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            setGuessRounds();
            setGameIsOver(true);
        }
    }, [currentGuess, userNumber, setGameIsOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        setGuessRounds();
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = randomNumberGenerator(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRoundsList((prevGuessRoundsList) => [newRndNumber, ...prevGuessRoundsList]);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                            <MaterialIcons name="add" size={24} color="white" />
                        </PrimaryButton>
                     </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <MaterialIcons name="remove" size={24} color="white" />   
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRoundsList}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsList.length - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 10,
    },
});