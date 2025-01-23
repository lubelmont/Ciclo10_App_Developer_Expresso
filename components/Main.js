import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { getCountries } from '../lib/countries';
import { CountryFlatList } from './CountryFlatList';
import { Link } from 'expo-router';

export function Main() {


  const [countries, setCountries] = useState([]);

  useEffect(() => {{}
    getCountries().then((countriesData) => {
      setCountries(countriesData);

    })
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>

        <Link asChild href="/about">
             <Pressable >
              <Text style={styles.text}>About</Text>
             </Pressable>
        </Link>



      <ScrollView>  


      {countries.length === 0 ?
       (
        <ActivityIndicator color={"#000"} size={"large"}/>
      ) 
       :
       (
        
        <FlatList
        data={countries}
        keyExtractor={country => country.common}
        renderItem={({ item }) => <CountryFlatList country={item} /> }
        />
       )
       }

      
      
      
      </ScrollView>
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
