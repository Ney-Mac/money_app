import { StyleSheet, View, TouchableOpacity } from "react-native";

export const ShortCard = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 132,
        marginVertical: 8, 
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'skyblue',
    }
});