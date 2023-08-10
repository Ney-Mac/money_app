import { useState } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

const SetPasswordScreen = ({ navigation }) => {
    const [isUnlock, setIsUnlock] = useState(false);
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    const onBackPress = () => {
        if (isUnlock) {
            setIsUnlock(false);
        } else {
            navigation.goBack()
        }
    }

    const onBtnPress = () => {
        if (isUnlock) {

            //Validar a nova senha e salvar

        } else {

            //Validar a senha actual e seguir para o proximo passo

            setIsUnlock(true);
        }
    }

    return (
        <Background>
            <BackButton goBack={onBackPress} />

            <Avatar.Icon icon='shield-lock' size={120} style={{ marginBottom: 24 }} />

            {
                isUnlock ?
                    <>
                        <TextInput
                            label="Nova senha"
                            returnKeyType="next"
                            value={password.value}
                            onChangeText={(text) => setPassword({ value: text, error: '' })}
                            error={!!password.error}
                            errorText={password.errorText}
                            secureTextEntry={true}
                        />
                        <TextInput
                            label="Confirmar nova senha"
                            returnKeyType="done"
                            value={confirmPassword.value}
                            onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                            error={!!confirmPassword.error}
                            errorText={confirmPassword.errorText}
                            secureTextEntry={true}
                        />
                    </>
                    :
                    <>
                        <TextInput
                            label="Senha actual"
                            returnKeyType="next"
                            value={password.value}
                            onChangeText={(text) => setPassword({ value: text, error: '' })}
                            error={!!password.error}
                            errorText={password.errorText}
                            secureTextEntry={true}
                        />
                    </>
            }

            <View style={{ width: '100%', paddingLeft: '50%' }}>
                <Button
                    mode="contained"
                    onPress={onBtnPress}
                >
                    {isUnlock ? 'Salvar' : 'Enter'}
                </Button>
            </View>

        </Background>
    )
}

export default SetPasswordScreen;