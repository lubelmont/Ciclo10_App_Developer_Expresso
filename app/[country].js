import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, StyleSheet, View, SafeAreaView, Pressable } from "react-native";

export default function Country() {

    const { country } = useLocalSearchParams()


    return (
        <View style={styles.container}>


            <SafeAreaView>
                <Link asChild href="/" >
                    <Pressable >
                        <Text style={styles.text}>{`Welcome to ${country}`} </Text>
                    </Pressable>
                </Link>
                <ScrollView>
                    
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