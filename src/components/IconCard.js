import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { theme } from "../themes/theme";

export const IconCard = ({ text, iconName = "arrow-right-circle-outline", redirectTo }) => {

    return (
        <TouchableOpacity style={styles.thinCard} onPress={redirectTo}>
            <Text style={styles.text} variant='titleMedium'>
                {text}
            </Text>

            <IconButton
                icon={iconName}
                size={36}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    thinCard: {
        height: 72,
        width: '100%',
        backgroundColor: 'aqua',
        borderRadius: 50,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        marginVertical: 8,
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 12,
    },
})