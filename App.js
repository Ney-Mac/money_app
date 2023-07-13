import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { GeralNavigator } from './src/routers/GeralNavigatior';
import { theme } from './src/themes/theme';
import { Provider } from 'react-native-paper';

export default function App() {
	return (
		<Provider theme={theme} style={styles.container}>
			<GeralNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
