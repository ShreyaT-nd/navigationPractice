
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./Screens/SettingsScreen";

import ProfileScreen from './Screens/ProfileScreen';
import CourseListScreen from "./Screens/CourseListScreen";



const Tab= createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "purple",
                
            }}>
            <Tab.Screen name="Course List" component={CourseListScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}
                />
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}