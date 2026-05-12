import { StyleSheet, Text, View, Image } from 'react-native';

import CardProduto from './CardProduto';
import { useState } from 'react';

export default function App() {
  const [categorias, setCategorias] = useState(['Fruta, Legume, Verdura'])
  const [lista, setLista] = useState([
    { nome: 'Banana', preco: 12, categoria: 'Fruta',   foto: require('./assets/banana.png') },
    { nome: 'Cebola', preco: 6,  categoria: 'Legume',  foto: require('./assets/cebola.png') },
    { nome: 'Maça',   preco: 8,  categoria: 'Fruta',   foto: require('./assets/maca.png') },
    { nome: 'Batata', preco: 4,  categoria: 'Legume',  foto: require('./assets/batata.png') },
    { nome: 'Maça',   preco: 8,  categoria: 'Fruta',   foto: require('./assets/maca.png') },
    { nome: 'Alface', preco: 6,  categoria: 'Verdura', foto: require('./assets/alface.png') },
  ])

  function validation() {
    return lista.filter(item => categorias.includes(item.categoria) && item.foto != null && item.preco > 0 && item.nome.length > 2)
  }

  const [filtrada, setFiltrada] = useState(validation());

  function filtration(categoria) {
    if (categoria == 'Todos') {
      setFiltrada(validation());
    } else {
      setFiltrada(validation().filter(item => item.categoria == categoria))
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={require('./assets/logo.png')} />
      <View style={styles.items}>
        {filtrada.map(item => <CardProduto nome={item.nome} preco={item.preco} categoria={item.categoria} foto={item.foto} />)}
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
  foto: {
    borderRadius: 2,
  }
});