
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
export function CountryList({ countries }) {
    return (
        <View>
            {countries.map((country, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: country.png }} style={styles.cardImage} />
                    <Link asChild href="/about">
                        <Pressable>
                          <Text style = {styles.cardTitle}>{country.common}</Text>
                        </Pressable>
                      </Link>
                    <Text style={styles.cardTitle}>{country.common}</Text>
                    <Text style={styles.cardText}>{country.official}</Text>
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    
    text: {
      color: 'red',
    },
  
    
  
    card: {
  
      backgroundColor: 'lightgray',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      width: 300,
  
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    cardText: {
      fontSize: 18,
    },
    cardImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
  

});