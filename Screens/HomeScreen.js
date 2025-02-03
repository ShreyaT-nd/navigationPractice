import {View, Text, StyleSheet, Button} from "react-native";

export default function HomeScreen({navigation, route}) {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >
                    Home Screen
                    {route.params?.result}
                </Text>
                <Button title="Go to about page" 
                onPress={ () => navigation.navigate("About", {
                    name: "Shreya",
                })} />
            </View>
        );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
})