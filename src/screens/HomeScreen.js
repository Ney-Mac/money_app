import { View, Text } from 'react-native';
import { Button } from "react-native-paper";
import { Background } from "../components/Background";

const HomeScreen = ({ navigation }) => {
    return (
        <Background>
            <View>
                <Text>Home Screen</Text>
            </View>
        </Background>
    )
}

export default HomeScreen;

//<Button onPress={() => { navigation.navigate('Register') }}>To Register</Button>