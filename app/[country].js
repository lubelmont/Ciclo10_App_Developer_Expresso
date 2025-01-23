import { useEffect, useState } from "react"; 
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, StyleSheet, View, SafeAreaView, Pressable, ActivityIndicator} from "react-native";
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

            <SafeAreaView>
                <Link asChild href="/" >
                    <Pressable >
                        <Text style={styles.text}>{`Welcome to ${country}`} </Text>
                        <Text style={styles.text}>{`Welcome to ${countryInfo.capital}`} </Text>
                    </Pressable>
                </Link>
                <ScrollView>
                    
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
    text: {
        color: 'red',
    },
});