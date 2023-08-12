import { useState } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

const RecoverPasswordScreen = ({ navigation }) => {
    const [user, setUser] = useState({ value: '', error: '' });

    const onSend = () => {

    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />

            <Avatar.Icon icon='shield-lock' size={120} style={{ marginBottom: 24 }} />

            <TextInput
                label="Digite seu número de telefone"
                keyboardType="numeric"
                value={user.value}
                onChangeValue={setUser}
                error={!!user.error}
                errorText={user.error}
                returnKeyType="done"
                description="Irá receber um código de recuperação de senha"
            />

            <View style={{ width: '100%', paddingLeft: '50%' }}>
                <Button
                    mode="contained"
                    onPress={onSend}
                >
                    Enviar
                </Button>
            </View>
        </Background>
    );
}

export default RecoverPasswordScreen;