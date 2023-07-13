import { useState } from "react";
import { Text, View } from 'react-native';
import { Button } from "react-native-paper";
import { Background } from "../components/Background";

const RegisterScreen = ({ navigation }) => {
    return (
        <Background>
            <View>
                <Button onPress={() => { navigation.navigate('Login') }}>To Login</Button>
                <Text>Register Screen</Text>
            </View>
        </Background>
    )
}

export default RegisterScreen;