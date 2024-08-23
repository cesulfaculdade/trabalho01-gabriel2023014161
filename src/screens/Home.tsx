import { StyleSheet, Text, View } from "react-native"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Compras </Text>
      </View>
        <View>

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
  }
})