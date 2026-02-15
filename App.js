import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { use, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SplashScreenOptions } from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded, fontError] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
    setGuessRounds(0);
  };

  const guessRoundsHandler = (s) => {
    setGuessRounds(guessRounds+1);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} setGameIsOver={setGameIsOver} setGuessRounds={guessRoundsHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen attempts={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent600]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView> 
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },  
});
