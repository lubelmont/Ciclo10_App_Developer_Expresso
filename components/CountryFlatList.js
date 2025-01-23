
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
export function CountryFlatList({ country }) {
  return (

    <View key={country.common} style={styles.card}>
      <Link asChild href={`/${country.common}`}>
        <Pressable>
          <Image source={{ uri: country.png }} style={styles.cardImage} />

          <Text style={styles.cardTitle}>{country.common}</Text>
          <Text style={styles.cardText}>{country.official}</Text>
          <Text>{country.region}</Text>
        </Pressable>
      </Link>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  cardRegion: {
    fontSize: 16,
    color: 'darkgray',
  },
});