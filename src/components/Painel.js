import { StyleSheet, View } from "react-native";

export const Painel = ({ children }) => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 144,
        width: '100%',
        backgroundColor: 'skyblue',
        marginTop: 8,
        marginBottom: 12,
        borderRadius: 4,
    }
});