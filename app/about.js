import { Link } from "expo-router";
import { ScrollView, Text, StyleSheet, View, SafeAreaView, Pressable } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>


            <SafeAreaView>
                <Link asChild href="/" >
                    <Pressable >
                        <Text style={styles.text}>Home</Text>
                    </Pressable>
                </Link>
                <ScrollView>
                    <Text style={styles.text}>
                        This is the about page.
                    </Text>
                    <Text style={styles.text}>
                        This app.....
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
    },
});