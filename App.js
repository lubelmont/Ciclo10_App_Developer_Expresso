import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { getCountries } from './lib/countries';
import { CountryFlatList } from './components/CountryFlatList';

export default function App() {


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
