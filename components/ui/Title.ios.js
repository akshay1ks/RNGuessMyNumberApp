import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        marginBottom: 16,
        color: Colors.accent700,
        borderWidth: 1, //Platform.OS === 'android' ? 2 : 0, Platform.select({ios: 1, android: 0,}),
        borderColor: Colors.accent700,
        padding: 12,
        textAlign: 'center',
        maxWidth: '80%',
        width: 300,
    },
}); 