import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <TouchableOpacity style={{margin: 20}}>
            <Text style={{fontWeight: "bold"}}>{item.title}</Text>
            <Text numberOfLines={1}>{item.body}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View>
                <ActivityIndicator />
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.contenedor}>
            <Text>Lista de post</Text>
            <FlatList
                data={post}
                renderItem={ ({item}) => <RenderPost item={item} /> }
                // renderItem={ ({item}) => RenderPost(item)}
                    keyExtractor={item => item["id"]}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        padding: 15,
        backgroundColor: '#ecbebeff'
    }
})