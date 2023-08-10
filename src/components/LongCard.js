import { StyleSheet, View, TouchableOpacity } from "react-native";

export const LongCard = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginVertical: 8, 
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'pink',
    }
});