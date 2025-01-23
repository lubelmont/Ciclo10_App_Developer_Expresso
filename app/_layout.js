import { Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";


export default function Layout() {
    return (
        <View style={styles.container}>
          {/* <Text style={styles.text}>Layout</Text> */}
          <Slot />
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