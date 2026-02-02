import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen(props) {

    return <View style={styles.screen}>
        <Title>
            Opponent's Guess
        </Title>
        <View>
            <Text>Higher or Lower</Text>
            <View><Text>Log Rounds</Text></View>
        </View>
    </View>;
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    }
});