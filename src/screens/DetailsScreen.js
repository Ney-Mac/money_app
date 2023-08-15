import { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Painel } from "../components/Painel";

const DetailsScreen = ({ navigation }) => {
    const route = useRoute();
    const { dia, mes } = route?.params;

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />

            <SafeAreaView style={styles.container}>

                <Painel />

                <ScrollView>
                    <DiaDetail diaSemana='Segunda-Feira' />
                    <DiaDetail diaSemana='Terça-Feira' />
                    <DiaDetail diaSemana='Quarta-Feira' />
                    <DiaDetail diaSemana='Quinta-Feira' />
                    <DiaDetail diaSemana='Sexta-Feira' />
                    <DiaDetail diaSemana='Sábado' />
                    <DiaDetail diaSemana='Domingo' />
                </ScrollView>

            </SafeAreaView>

        </Background>
    )
}

const DiaDetail = ({ dia = '--', pontos = '--', diaSemana }) => {
    return (
        <View style={styles.pontos}>
            <Text
                variant="bodyLarge"
                style={styles.textHead}
            >
                {diaSemana}
            </Text>
            <Text variant='bodyMedium' style={styles.text}>
                Dia: {dia}
            </Text>
            <Text variant='bodyMedium' style={styles.text}>
                Pontos ganhos: {pontos}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: getStatusBarHeight() + 36,
        marginBottom: 4,
    },
    pontos: {
        height: 'auto',
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'pink',
        justifyContent: 'center',
        paddingLeft: 8,
        paddingVertical: 4,
        marginVertical: 8,
    },
    text: {
        textAlign: 'justify',
    },
    textHead: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default DetailsScreen;