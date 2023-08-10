import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from "react-native-paper";
import { Background } from "../components/Background";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { theme } from "../themes/theme";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [phone, setPhone] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    const onSend = () => {
        navigation.navigate('Dashboard', { screen: 'Home' });
    }

    return (
        <Background>
            <TextInput
                label="Nome"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                autoCapitalize="words"
            />
            <TextInput
                label="Telemóvel"
                returnKeyType="next"
                value={phone.value}
                onChangeText={(text) => setPhone({ value: text, error: '' })}
                error={!!phone.error}
                errorText={phone.error}
                autoCapitalize="none"
            />
            <TextInput
                label="Senha"
                returnKeyType="next"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.errorText}
                secureTextEntry={true}
            />
            <TextInput
                label="Confirmar Senha"
                returnKeyType="done"
                value={confirmPassword.value}
                onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                error={!!confirmPassword.error}
                errorText={confirmPassword.errorText}
                secureTextEntry={true}
            />

            <View style={styles.rowBtn}>
                <Button
                    mode="contained"
                    onPress={onSend}
                >
                    Criar Conta
                </Button>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 12 }} >
                <Text>Já tem uma conta? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
                    <Text style={styles.link}>Entrar</Text>
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
    link: {
        color: theme.colors.primary,
        fontWeight: 'bold',
    }
});

export default RegisterScreen;