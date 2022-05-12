import { StyleSheet, View , TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const AddProduct = ({  addProduct}) => {
    const [product, setProduct] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)


    useEffect(() => {
 /*        if(product.length> 2 ){
            setBtnDisabled(false)
        }else{
            setBtnDisabled(true)
        } */
    }, [product])

    const inputHandler = (val) => {
        setProduct(val)
      }

    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
         />
         <Button
         title="Valider"
         onPress={() => {        
            addProduct(product) 
            setProduct("")}
        }
        disabled={btnDisabled}
         />
      </View>
    )
}

const styles = StyleSheet.create({
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
});

export default AddProduct;