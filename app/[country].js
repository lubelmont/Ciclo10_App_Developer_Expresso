import { useEffect, useState } from "react"; 
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, StyleSheet,Image, View, SafeAreaView, Pressable, ActivityIndicator, Linking} from "react-native";
import { getCoutry } from '../lib/countries';

export default function Country() {

    const { country } = useLocalSearchParams()
    const [countryInfo, setcountryInfo] = useState(null);

    useEffect(() => {
        if (country) {
            getCoutry(country).then(setcountryInfo);
        }
      }, [country]);
    
console.log(countryInfo)

const handlePress = () => {
    Linking.openURL(countryInfo.googleMaps);
};

    return (
        <View style={styles.container}>

{countryInfo === null ?
          (
            <ActivityIndicator
              style={styles.activityIndicator}
              color={"#000"}
              size={"large"}
            />
          )
          :
          (

            <SafeAreaView  style={styles.safeArea}>
                <Link asChild href="/" >
                    <Pressable >
                        <Text style={styles.text}>{`Welcome to ${country}`} </Text>
                        <Image source={{ uri: countryInfo.png }} style={styles.image} />
                        <Text style={styles.text}>{`Welcome to ${countryInfo.capital}`} </Text>
                    </Pressable>
                </Link>
                <ScrollView>
                        <Pressable onPress={handlePress} style={styles.linkButton}>
                            <Text style={styles.linkText}>Open Link</Text>
                        </Pressable>
                    </ScrollView>
            </SafeAreaView>
          )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    linkButton: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        margin: 10,
    },
    linkText: {
        color: 'white',
        fontSize: 16,
    },
    activityIndicator: {
        marginTop: 20,
    },
});