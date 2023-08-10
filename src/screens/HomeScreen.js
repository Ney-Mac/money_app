import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { HomeBackground as Background } from "../components/Background";
import { LongCard } from '../components/LongCard';
import { ShortCard } from '../components/ShortCard';

//<LongCard />

const HomeScreen = ({ navigation }) => {
    const data = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ]

    return (
        <Background>

            <SafeAreaView style={{ height: 'auto' }}>
                <FlatList
                    data={data}
                    renderItem={(item) => <ShortCard />}
                    keyExtractor={(item) => item}
                    horizontal={true}
                    ItemSeparatorComponent={<View style={{ height: 8, width: 8 }}></View>}
                />
            </SafeAreaView>

            <LongCard />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <ShortCard />
                <ShortCard />
                <ShortCard />
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={(item) => <LongCard />}
                    keyExtractor={(item) => item}
                />
            </SafeAreaView>

        </Background>
    )
}

export default HomeScreen;

//<Button onPress={() => { navigation.navigate('Register') }}>To Register</Button>