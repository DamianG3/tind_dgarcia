import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }: any) {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')


    const verificarLogin = () => {
        if (correo === 'admin@floreria.com' && password === '123') {
            navigation.replace('Home')
        } else {
            navigation.replace('Home')
            // console.log("Error en el acceso");

        }
    }

    return (
        <SafeAreaView style={styles.contenedor}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>


                <Text style={styles.titulo}>Inicia sesión con tu cuenta</Text>

                <TextInput
                    onChangeText={setCorreo}
                    value={correo}
                    placeholder="Correo electronico"
                    keyboardType="email-address"
                    spellCheck={false}
                    style={styles.input}
                />

                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={styles.input}

                />

                <TouchableOpacity
                    onPress={verificarLogin}
                    style={styles.boton}>
                    <Text style={styles.botonTexto}>Ingresar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5DAA7',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color:'#662222'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        fontSize: 16,
    },
    boton: {
        backgroundColor: '#662222',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20
    },
    botonTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})