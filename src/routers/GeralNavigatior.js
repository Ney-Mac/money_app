import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DashboardNavigator from "./DashboardNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen";

const Stack = createNativeStackNavigator();

export const GeralNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Dashboard" component={DashboardNavigator} />
                <Stack.Screen name="Recover" component={RecoverPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}