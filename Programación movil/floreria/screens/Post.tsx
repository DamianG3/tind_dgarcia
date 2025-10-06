import { StyleSheet, Text, View } from "react-native"

export default function Post({ route }: any) {
    const { post } = route.params;

    console.log('Ruta: ', route);


    return (
        <View style={styles.contenedor}>
            <View style={styles.post}>
                <View style={styles.infoContenedor}>
                    <Text style={[styles.info, styles.autor]}>Dreaming Flowers</Text>
                    <Text style={[styles.info, styles.identificador]}>#{post.id}</Text>
                </View>
                <Text style={styles.titulo}>{post.title}</Text>
                {/* <Text style={styles.postBody}>{post.body}</Text> */}
                {post.body.split("\n").map((line: string, i: number) => (<Text style={styles.postBody} key={i}>{line}</Text>))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F5DAA7'

    },
    post: {
        backgroundColor: '#fff',
        padding: 17,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#662222',

    },
    infoContenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info:{
        fontSize: 15,
        marginBottom: 7,
    },
    identificador: {
        textAlign: "right"
    },
    autor: {
        textAlign: "left"
    },
    postBody: {
        fontSize: 16,
        marginBottom: 8

    }
})