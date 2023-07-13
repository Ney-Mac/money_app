import { Pressable, StyleSheet, KeyboardAvoidingView, Keyboard } from "react-native";
import { theme } from "../themes/theme";

export const Background = ({ children }) => {
    return (
        <Pressable style={styles.pressable} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior="height">
                {children}
            </KeyboardAvoidingView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    container: {
        flex: 1,
        padding: 12,
        width: '100%',
        maxWidth: 340,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});