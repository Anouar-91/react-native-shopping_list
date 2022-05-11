import { StyleSheet, Button, View , TextInput, FlatList,  Text} from 'react-native';
import {useState} from 'react'
export default function App() {

  const [product, setProduct] = useState('')
  const [products, setProducts] = useState([])

  const inputHandler = (val) => {
    setProduct(val)
  }

  const addProduct = () => {
    const idString = Date.now().toString();
    setProducts(currentMyProducts => [{key:idString, name:product},...currentMyProducts])
    setProduct('')
  }
console.log(products)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
         />
         <Button
         title="Valider"
         onPress={() => addProduct(product)}
         />
      </View>
      <View style={styles.items}>
      <FlatList 
        data={products}
        renderItem={({item}) => <Text style={styles.element}>{item.name}</Text>}

      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:40,
    paddingTop:60
  },
  inputContainer:{
    flexDirection:"row",
    marginBottom:20
  },
  textInput: {
    borderColor: "grey",
    borderWidth:1,
    padding:5,
    paddingLeft:9,
    fontSize:18,
    flexGrow:1
  },
  items:{
  },
  element: {
    backgroundColor:"#ffb6c1",
    padding: 5,
    marginTop:5

  }

});
