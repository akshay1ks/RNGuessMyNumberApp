import { Text, StyleSheet } from 'react-native';
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
        borderWidth: 1,
        borderColor: Colors.accent700,
        padding: 12,
        textAlign: 'center',
    },
}); 