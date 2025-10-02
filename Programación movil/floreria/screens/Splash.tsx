import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Splash({navigation}) {
    
    useEffect(() => {
        setTimeout(function() {
            navigation.replace('Login')
        }, 1000)
    })


    return (
        <View style={styles.contenedor}>
            <Image source={require('../assets/rose.png')} style={styles.logo}/>
            <Text style={styles.titulo}>Bienvenidos a Dreaming Flowers</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#a12424ff'
    }, 
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10
    },
    logo:{
        width: 150,
        height: 150,
        // borderRadius: 100,
        marginBottom: 20
    }

})