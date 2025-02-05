import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './Screens/DashboardScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Drawer =createDrawerNavigator(); 

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen}
                options={{
                    title: "My Dashboard",
                    drawerLabel: "Dashboard label",
                    drawerActiveTintColor: "#333",
                    drawerActiveBackgroundColor: "lightblue",
                    drawerContentStyle: {
                        backgroundColor: "#c6cbef",
                    },
                }}/>

                <Drawer.Screen name="Settings" component={SettingsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
