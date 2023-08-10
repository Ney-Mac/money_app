import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button as PaperButton } from "react-native-paper";
import { Background } from "../components/Background";
import { TextInput } from '../components/TextInput';
import { BackButton } from '../components/BackButton';
import { Button } from '../components/Button';
import { theme } from '../themes/theme';

const ProfileScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [phone, setPhone] = useState({ value: '', error: '' });

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />

            <Avatar.Icon size={120} icon="account" />

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

            <View style={styles.rowBtn}>
                <Button
                    mode="contained"
                >
                    Salvar
                </Button>
            </View>

            <PaperButton
                icon="arrow-right"
                onPress={() => { navigation.navigate('Alterar Senha') }}
            >
                Alterar senha
            </PaperButton>

        </Background>
    )
}

const styles = StyleSheet.create({
    rowBtn: {
        width: '100%',
        paddingLeft: '50%',
    }
});

export default ProfileScreen;