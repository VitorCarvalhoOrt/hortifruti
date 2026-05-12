import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import CardProduto from './CardProduto';
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const [categorias, setCategorias] = useState(['Fruta', 'Legume', 'Verdura'])
  const [lista, setLista] = useState([
    { nome: 'Banana', preco: 12, categoria: 'Fruta', imagem: require('./assets/banana.png') },
    { nome: 'Cebola', preco: 6, categoria: 'Legume', imagem: require('./assets/cebola.png') },
    { nome: 'Maça', preco: 8, categoria: 'Fruta', imagem: require('./assets/maca.png') },
    { nome: 'Batata', preco: 4, categoria: 'Legume', imagem: require('./assets/batata.png') },
    { nome: 'Uva passa', preco: 8, categoria: 'Fruta', imagem: require('./assets/uva.png') },
    { nome: 'Alface', preco: 6, categoria: 'Verdura', imagem: require('./assets/alface.png') },
  ])

  function validation() {
    return lista.filter(item => categorias.includes(item.categoria) && item.imagem != null && item.preco > 0 && item.nome.length > 2)
  }

  const [filtrada, setFiltrada] = useState(validation());
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  function filtration(categoria) {
    setSelectedCategory(categoria);
    if (categoria == 'Todos') {
      setFiltrada(validation());
    } else {
      setFiltrada(validation().filter(item => item.categoria == categoria))
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={require('./assets/logo.png')} />
      <View>
        <Text style={styles.title}>Hortifruti</Text>
        <View style={styles.menu}>
          <Text style={styles.textoBotao}>Selecione a categoria</Text>
          <View style={styles.botoes}> 
            <Button color={selectedCategory === 'Todos' ? 'black' : 'cyan'}    title='Todos' onPress={() => filtration('Todos')} />
            <Button color={selectedCategory === 'Fruta' ? 'black' : 'red'}     title='Frutas' onPress={() => filtration('Fruta')} />
            <Button color={selectedCategory === 'Legume' ? 'black' : 'yellow'} title='Legumes' onPress={() => filtration('Legume')} />
            <Button color={selectedCategory === 'Verdura' ? 'black' : 'green'} title='Verduras' onPress={() => filtration('Verdura')} />
          </View>
        </View>
        <ScrollView style={styles.items} contentContainerStyle={styles.itemsContainer}>
          {filtrada.map(item => <CardProduto key={item.nome} nome={item.nome} preco={item.preco} categoria={item.categoria} imagem={item.imagem} />)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    borderRadius: 2,
  },
  icone: {
    width: 200,
    height: 200
  },
  items: {
    width: '100%',
  },
  itemsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  botoes: {
    padding: 15,
    width: 450,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    backgroundColor: '#2ca332',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    margin: 20
  },
  textoBotao: {
    fontWeight: 600,
    fontSize: 20
  }
});