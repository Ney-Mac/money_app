import { useState } from "react";
import { View, Text } from 'react-native';
import { Button } from "react-native-paper";
import { Background } from "../components/Background";

const LoginScreen = ({ navigation }) => {
    return (
        <Background>
            <View>
                <Button onPress={() => { navigation.navigate('Register') }}>To Register</Button>
                <Button onPress={() => { navigation.navigate('Dashboard', { screen: 'Home' }) }}>To Home</Button>
                <Text>Login Screen</Text>
            </View>
        </Background>
    )
}

export default LoginScreen;