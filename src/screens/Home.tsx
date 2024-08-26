import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from "react-native"
import { ListTitle } from "../components/ListTitle"
import { useState } from "react";
import shopping from "../images/shopping_list.png";
import { MaterialIcons } from '@expo/vector-icons';
import { Product } from "../components/Product";

type Product = {
  name: string;
  done: boolean;
};

export function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const productDone = products.reduce((acc, product) => {
    return product.done ? acc + 1 : acc;
    }, 0);

    function handleProductAdd() {
      if (products.some(product => product.name === productName)) {
        return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.");
      }
      setProducts((prevState) => [...prevState, {name: productName, done: false}]);
      setProductName('');
    }

    function handleProductRemove(name: string) {
      console.log(`Produto Removido! ${name}`);
      return Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
          {
           text: 'Sim',
           onPress: () => setProducts(prevState => prevState.filter(product => product.name != name))
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ]);
       }
    
     function handleProductDone(name: string) {
      setProducts((prevState) =>
        prevState.map((product) =>
          product.name === name ? { ...product, done: !product.done } : product
        )
      );
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Compras </Text>
      </View>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione um novo produto"
            placeholderTextColor='#808080'
            keyboardType="default"
            value={productName}
            onChangeText={setProductName}
          />

          <TouchableOpacity
          style={styles.button}
          onPress={handleProductAdd}
          >
            <MaterialIcons name="add-circle-outline" size={16} color="white"
              />
          </TouchableOpacity>
        </View>
        <View style={styles.productAndFinish}>
          <ListTitle  color={"#31C667"} name={"Produtos"} number={products.length}/>
          <ListTitle color={"#7A4A9E"} name={"Finalizados"} number={productDone}/>
        </View>

        <FlatList 
              data={products}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Product name={item.name} done={item.done} onRemove={() => handleProductRemove(item.name)}
                RadioPress={() => handleProductDone(item.name)} />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={products.length <= 0 && styles.list}
              ListEmptyComponent={() => (
                <View style={styles.listEmpty}>
                  <Image style={styles.image}
                  source={shopping}/>
                  <Text style={styles.listEmptyText}>
                    Você ainda não tem produtos na lista de compra
                  </Text>
                  <Text style={styles.listEmptySubtitle}>
                    Adicione produtos e organize sua lista de compras
                  </Text>
              </View>

              )}
            />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    backgroundColor: '#7a4a9e',
    height: 173
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2F2F2',
    margin: 'auto'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -30
  },
  input: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    fontSize: 16,
    marginRight: 5,
    height: 54,
    marginLeft: 24,
    borderColor: '#808080',
    borderStyle: 'solid',
    borderWidth: 0.5
  },
  button: {
    borderRadius: 6,
    backgroundColor: '#31C667',
    width: 52,
    height: 52,
    borderColor: '#808080',
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: 24
  },
  productAndFinish: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 33
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: '#D9D9D9',
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginTop: 20
  },
  listEmptyText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080'
  },
  listEmptySubtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#808080'
  },
  image: {
    width: 56,
    marginBottom: 20
  },
  listEmpty: {
    flex: 1,
    alignItems: 'center'
  }
})