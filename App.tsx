
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" > 
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: "Welcome home",
            headerStyle:{
              backgroundColor: "#6a51ae"
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold"},
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button pressed")}>
                <Text>Menu</Text>
              </Pressable>
            )
          }}/>
          <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}