import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WinsScreen from "../screens/WinsScreen";
import TransferirScreen from "../screens/TransferirScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SetPasswordScreen from "../screens/SetPasswordScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../themes/theme";

const Tab = createBottomTabNavigator();

const DashboardNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
            }}
            backBehavior="history"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Meus Ganhos"
                component={WinsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="money-bill-alt" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Transferir"
                component={TransferirScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="dollar-sign" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Minha Conta"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Alterar Senha"
                component={SetPasswordScreen}
                options={{
                    tabBarItemStyle: {
                        display: 'none'
                    }
                }}
            />
            <Tab.Screen
                name="Detalhes Semanais"
                component={DetailsScreen}
                options={{
                    tabBarItemStyle: {
                        display: 'none',
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default DashboardNavigator;