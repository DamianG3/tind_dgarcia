import { useEffect } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

export default function Splash({navigation}:any) {
    
    useEffect(() => {
        setTimeout(function() {
            navigation.replace('Login')
        }, 2000)
    })


    return (
        
        <View style={styles.contenedor}>
            <StatusBar hidden={true}/>
            <Image source={require('../assets/rose.png')} style={styles.logo}/>
            
            <Text style={styles.titulo}>Dreaming Flowers</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#842A3B'
    }, 
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#F5DAA7",
        marginBottom: 10
    },
    logo:{
        width: 150,
        height: 150,
        // borderRadius: 100,
        marginBottom: 20
    }

})