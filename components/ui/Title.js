import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: Colors.accent700,
        borderWidth: 1,
        borderColor: Colors.accent700,
        padding: 12,
        textAlign: 'center',
    },
}); 