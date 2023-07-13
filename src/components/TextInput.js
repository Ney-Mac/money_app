import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput as Input } from "react-native-paper";
import { theme } from "../themes/theme";

export const TextInput = ({ description, errorText, secureTextEntry, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <View style={styles.container}>
            {
                secureTextEntry ?
                    <Input
                        style={styles.input}
                        outlineStyle={{ borderRadius: 50 }}
                        selectionColor={theme.colors.primary}
                        underlineColor="transparent"
                        mode="outlined"
                        secureTextEntry={!showPassword}
                        onBlur={() => { setActive(false) }}
                        onFocus={() => { setActive(true) }}
                        right={<Input.Icon
                            icon={!showPassword ? 'eye' : 'eye-off'}
                            iconColor={active ? theme.colors.primary : theme.colors.placeholder}
                            onPress={() => { setShowPassword(!showPassword) }}
                        />}
                        {...props}
                    />
                    :
                    <Input
                        style={styles.input}
                        selectionColor={theme.colors.primary}
                        outlineStyle={{ borderRadius: 50 }}
                        underlineColor="transparent"
                        mode="outlined"
                        {...props}
                    />
            }
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input: {
        backgroundColor: theme.colors.surface,
    },
    description: {
        fontSize: 13,
        color: theme.colors.secondary,
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
});