
import { View, Text, Image, StyleSheet } from 'react-native';
import { Main } from '../components/Main';


export default function Index() {
console.log("Index") 
    return (
    <View style={styles.container}>
      <Main />
    </View>
)

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