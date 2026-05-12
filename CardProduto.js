import {View, Text, StyleSheet, Image} from 'react-native';

export default function CardProduto({nome, preco, categoria, imagem}){
    return(
        //props
    <View style={styles.container}>
        <View styScle={styles.imagem}>
            <Image source={imagem} style={styles.imagem}/>
        </View>
        
        <View style={styles.textoContainer}>
            <Text style={styles.textoDados}>Nome: {nome}</Text>
            <Text style={styles.textoDados}>Preço: {preco}</Text>
            <Text style={styles.textoDados}>Categoria: {categoria}</Text>

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b2b2b',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        margin: 10,
    }, imagem: {
        borderRadius: 50,
        width: 80,
        height: 80,

    },
    textoDados: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 4,
        fontWeight: 'bold'
    },
    textoContainer: {
        height: 80,
    }
})

