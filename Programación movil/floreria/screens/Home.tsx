import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }: any) {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPost(data.slice(0, 10))
                setLoading(false)
            })
            .catch(error => {
                console.log("Error: ", error)
                setLoading(false)
            })

    }, [])

    console.log(post);


    const RenderPost = ({item}: any) => (
        <TouchableOpacity style={styles.contenedorPost}
        onPress={() => navigation.navigate('Post', {post: item})}
        >
            <Text style={styles.tituloPost} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.descripcionPost} numberOfLines={1}>{item.body}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.contenedorCargando}>
                <ActivityIndicator color={'#662222'} style={{marginBottom:11}}/>
                <Text style={{marginBottom: 25, fontSize:16}}>Cargando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.contenedor}>
            <StatusBar barStyle='light-content'/>
            <Text style={styles.titulo}>Posts recientes</Text>
            <FlatList
                data={post}
                renderItem={ ({item}) => <RenderPost item={item} /> }
                // renderItem={RenderPost}
                keyExtractor={item => item["id"]}
                style={styles.listPost}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        padding: 15,
        backgroundColor: '#F5DAA7'
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:15,
    },
    listPost: {
        flex: 1
    },
    contenedorPost:{
        backgroundColor:'#842A3B',
        padding:8,
        margin:5,
        borderRadius: 8
    },
    tituloPost: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#fff'
        // marginTop: 10,
        // borderRadius: 8
    },
    descripcionPost: {
        fontSize: 14,
        color: '#F5DAA7',
        marginBottom:3
    },
    contenedorCargando:{
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor: '#F5DAA7'
    }
})