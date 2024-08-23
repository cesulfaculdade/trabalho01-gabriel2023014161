import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from "react-native"
import { ListTitle } from "../components/ListTitle"

export function Home() {

  function handleProductAdd() {
    console.log('Teste')
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
          />

          <TouchableOpacity
          style={styles.button}
          onPress={handleProductAdd}
          >
            <Text style={styles.textButton}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productAndFinish}>
          <ListTitle  color={"#31C667"} name={"Produtos"} number={0}/>
          <ListTitle color={"#7A4A9E"} name={"Finalizados"} number={0}/>
        </View>
        

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

  }
})