import { StyleSheet, Text, View } from 'react-native';

import CardProduto from './componentes/CardProduto';

export default function App() {
  return (
    <View style={styles.container}>
      <CardProduto 
      nome='banana'
      preco={21}
      categoria='frutas'
      imagem={require('./assets/icon.png')}
      />
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
