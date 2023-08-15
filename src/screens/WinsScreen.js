import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Painel } from '../components/Painel';
import { IconCard } from '../components/IconCard';

const WinsScreen = ({ navigation }) => {
    const data = [
        { dia: 12, mes: 7 },
        { dia: 5, mes: 10 },
        { dia: 2, mes: 1 },
        { dia: 1, mes: 4 },
        { dia: 28, mes: 9 },
        { dia: 1, mes: 1 },
        { dia: 28, mes: 7 },
        { dia: 1, mes: 3 },
        { dia: 28, mes: 6 }
    ];

    return (
        <Background style={{ paddingHorizontal: 0 }}>
            <BackButton goBack={navigation.goBack} />

            <View style={styles.container}>
                <View style={styles.pontos}>
                    <Text variant='bodyMedium'>
                        Pontos Acomulados:
                        <Text style={{ fontWeight: 'bold' }}>
                            1248
                        </Text>
                    </Text>
                </View>

                <Painel />

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <IconCard
                                text={`Semana ${item.dia}/${item.mes}`}
                                redirectTo={() => {
                                    navigation.navigate(
                                        'Detalhes Semanais',
                                        {
                                            dia: item.dia,
                                            mes: item.mes
                                        }
                                    )
                                }}
                            />
                        )}
                        keyExtractor={(item) => item.dia + '' + item.mes}
                    />
                </SafeAreaView>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: getStatusBarHeight() + 36,
    },
    pontos: {
        height: 48,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'pink',
        justifyContent: 'center',
        paddingLeft: 8,
    },
})

export default WinsScreen;