import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Background } from "../components/Background";
import { BackButton } from '../components/BackButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Painel } from '../components/Painel';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { theme } from '../themes/theme';

const TransferirScreen = ({ navigation }) => {
    const [pontos, setPontos] = useState({ value: '', error: '' });
    const [iban, setIban] = useState({ value: '', error: '' });

    const handleIbanValue = (value) => {
        if (value && !(/^[\d.]+$/).test(value)) {
            setIban({ ...iban, error: 'Iban inválido' })
            return;
        };

        let arrValue = value.split('');

        if ((value.length > (iban.value).length) && (((iban.value).length + 1) % 5 === 0)) {
            arrValue.splice((iban.value).length, 0, '.');
        }

        setIban({ value: arrValue.join(''), error: '' });
    }

    const handlePontosValue = (value) => {
        if (value > 1000) {
            setPontos({ ...pontos, error: 'O valor não pode ser maior que 1000' })
        } else setPontos({ value: value, error: '' })
    }

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

                <View style={styles.row}>
                    <View style={styles.colLeft}>
                        <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
                            IBAN
                        </Text>
                    </View>
                    <View style={styles.colRight}>
                        <Text>A006</Text>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                label="Insira seu Iban"
                                mode="flat"
                                value={iban.value}
                                onChangeText={handleIbanValue}
                                returnKeyType="done"
                                keyboardType="numeric"
                                error={!!iban.error}
                                errorText={iban.error}
                                underlineColor={theme.colors.primary}
                            />
                        </View>

                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.colLeft}>
                        <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
                            Pontos
                        </Text>
                    </View>
                    <View style={styles.colRight}>

                        <TextInput
                            label="Pontos a transferir"
                            mode="flat"
                            underlineColor={theme.colors.primary}
                            value={pontos.value}
                            onChangeText={handlePontosValue}
                            returnKeyType="done"
                            keyboardType="numeric"
                            error={!!pontos.error}
                            errorText={pontos.error}
                        />
                    </View>
                </View>

                <View style={styles.sugest}>
                    <Button mode="contained" labelStyle={styles.btnSugestLabel} containerStyle={{ width: '30%', marginVertical: 0, paddingVertical: 0 }} onPress={() => { handlePontosValue('10') }}>10</Button>
                    <Button mode="contained" labelStyle={styles.btnSugestLabel} containerStyle={{ width: '30%', marginVertical: 0, paddingVertical: 0 }} onPress={() => { handlePontosValue('50') }}>50</Button>
                    <Button mode="contained" labelStyle={styles.btnSugestLabel} containerStyle={{ width: '30%', marginVertical: 0, paddingVertical: 0 }} onPress={() => { handlePontosValue('100') }}>100</Button>
                    <Button mode="contained" labelStyle={styles.btnSugestLabel} containerStyle={{ width: '40%', marginVertical: 0, paddingVertical: 0 }} onPress={() => { handlePontosValue('500') }}>500</Button>
                    <Button mode="contained" labelStyle={styles.btnSugestLabel} containerStyle={{ width: '55%', marginVertical: 0, paddingVertical: 0 }} onPress={() => { handlePontosValue('1000') }}>1000</Button>
                </View>

                <Button
                    mode='outlined'
                    containerStyle={{ marginTop: 36 }}
                    icon="send"
                >
                    Transferir
                </Button>

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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        gap: 12,
    },
    colLeft: {
        width: '25%'
    },
    colRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sugest: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    btnSugestLabel: {
        lineHeight: 16,
        fontSize: 12,
    }
})

export default TransferirScreen;