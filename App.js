import { StyleSheet, Text, View, Image } from 'react-native';
import { CardProduto } from './src/componentes/CardProduto';

export default function App() {
  return (
    <View style={styles.container}>
    <Text styles={style.foto}>{imageM}</Text>
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
