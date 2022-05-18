import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent'

const AddProduct = ({ addProduct, displayModal, cancelNewProduct }) => {
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

  const handleClick = () => {
    addProduct(product)
    setProduct("")
    cancelNewProduct()
  }
  return (
    <Modal
      visible={displayModal}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <View style={styles.btnContainer}>
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>Valider</ButtonComponent>
          <ButtonComponent  onPressHandler={cancelNewProduct} style={styles.btnRed}>Annuler</ButtonComponent>

        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    //flexGrow:1
    marginBottom: 9
  },
  btnContainer: {
    flexDirection:"row",
    justifyContent: "space-between",
  },
  btnRed:{
    backgroundColor: "tomato",
    width:100,
    borderRadius:6

  },
  btnBlue:{
    backgroundColor: "seagreen",
    width:100,
    borderRadius:6
  }
});

export default AddProduct;