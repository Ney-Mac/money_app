import { View, Text } from 'react-native';
import { Button } from "react-native-paper";
import { Background } from "../components/Background";

const ProfileScreen = ({ navigation }) => {
    return (
        <Background>
            <View>
                <Button onPress={() => { navigation.navigate('Login') }}>To Start</Button>
                <Button onPress={() => { navigation.navigate('Home') }}>To Home</Button>
                <Text>Profile Screen</Text>
            </View>
        </Background>
    )
}

export default ProfileScreen;