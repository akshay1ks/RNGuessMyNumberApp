import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.accent700,
        width: 150,
        padding: deviceWidth < 380 ? 12 : 24,
        marginTop: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: deviceWidth < 380 ? 28 : 36,
        color: Colors.accent700,
    },
});