import { 
    Pressable, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Keyboard,
    View,
} from "react-native";
import { theme } from "../themes/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Background = ({ children }) => {
    return (
        <Pressable style={styles.pressable} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior="height">
                {children}
            </KeyboardAvoidingView>
        </Pressable>
    )
}

export const HomeBackground = ({ children }) => {
    return (
        <View style={homeStyles.container}>
            {children}
        </View>
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

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 12,
        marginTop: getStatusBarHeight(),
    },
});