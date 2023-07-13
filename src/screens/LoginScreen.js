import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from "react-native-paper";
import { Background } from "../components/Background";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { theme } from "../themes/theme";

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onSend = () => {
        
    }

    return (
        <Background>
            <TextInput
                label="Telemóvel"
                returnKeyType="next"
                value={user.value}
                onChangeText={(text) => setUser({ value: text, error: '' })}
                error={!!user.error}
                errorText={user.error}
                autoCapitalize="none"
            />
            <TextInput
                label="Senha"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.errorText}
                secureTextEntry={true}
            />

            <View style={styles.rowForgot}>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rowBtn}>
                <Button
                    mode="contained"
                >
                    Entrar
                </Button>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 12 }} >
                <Text>Não tem uma conta? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register'); }}>
                    <Text style={styles.link}>Criar</Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
}

const styles = StyleSheet.create({
    rowBtn: {
        width: '100%',
        paddingLeft: '50%',
    },
    rowForgot: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.primary,
    },
    link: {
        color: theme.colors.primary,
        fontWeight: 'bold',
    }
});

export default LoginScreen;