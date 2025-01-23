import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { getCountries } from '../lib/countries';
import { CountryFlatList } from './CountryFlatList';
import { Link } from 'expo-router';

export function Main() {


  const [countries, setCountries] = useState([]);

  useEffect(() => {
    { }
    getCountries().then((countriesData) => {
      setCountries(countriesData);

    })
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <View style={styles.linkContainer}>
          <Link asChild href="/about">
            <Pressable>
              <Text style={styles.text}>About</Text>
            </Pressable>
          </Link>
        </View>



        {countries.length === 0 ?
          (
            <ActivityIndicator
              style={styles.activityIndicator}
              color={"#000"}
              size={"large"}
            />
          )
          :
          (

            <FlatList
              data={countries}
              keyExtractor={country => country.common}
              renderItem={({ item }) => <CountryFlatList country={item} />}
              contentContainerStyle={styles.flatList}
            />
          )
        }

      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Color de fondo general
    paddingTop: 20, // Espaciado superior para no estar pegado al borde en iOS
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10, // Espacio alrededor del texto
  },
  linkText: {
    fontSize: 16,
    color: '#007BFF', // Color azul para el enlace
    textAlign: 'center',
    textDecorationLine: 'underline', // Subraya el texto para que se vea como un enlace
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido dentro del SafeAreaView
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 20, // Margen superior para darle espacio al ActivityIndicator
  },
  listContainer: {
    flex: 1,
    marginTop: 10, // Espaciado superior para la lista
    paddingHorizontal: 15, // Espaciado horizontal para dar márgenes
  },
  countryCard: {
    backgroundColor: '#fff', // Fondo blanco para cada item de la lista
    padding: 15,
    borderRadius: 8,
    marginVertical: 10, // Espaciado entre elementos de la lista
    elevation: 2, // Sombra para darle profundidad
  },
  countryText: {
    fontSize: 16,
    color: '#333', // Color del texto de los elementos de la lista
  },
});

export default styles;