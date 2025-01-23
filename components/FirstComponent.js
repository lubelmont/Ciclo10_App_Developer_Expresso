export function FirstComponent() {

    return (
        <View style={styles.container}>
        <Text style={styles.text} >My App 101</Text>

        <Text>hola mundo </Text>

        <Button title="Click me" onPress={() => alert('Button Clicked')} />

        <Image fadeDuration={10} source={require('./assets/icon.png')}
        style={{ width: 100, height: 100 }} />

        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        /> 

            <Pressable onPress={() => 

           alert('Pressable Clicked')

            }

            style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? 'rgb(23, 80, 150)'
                : 'white'
            },
            styles.wrapperCustom
            ]}
            >
            <Text>Get Countries!</Text>
            </Pressable> 

        </View>
    )

}