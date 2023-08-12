import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../themes/theme';

export const Button = ({ mode, style, containerStyle, labelStyle, ...props }) => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...containerStyle }}>
            <PaperButton
                style={[
                    mode === 'outlined' && { backgroundColor: theme.colors.surface },
                    { borderRadius: 50 },
                    style,
                ]}
                labelStyle={{ ...styles.text, ...labelStyle }}
                mode={mode}
                {...props}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})