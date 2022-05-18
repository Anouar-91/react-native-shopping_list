import { StyleSheet, View, TextInput, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'
import BodyText from './BodyText'

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

    const regex = /[^a-z]/gi
    setProduct(val.replace(regex, ""));
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
        <BodyText>Veuillez indiquer un produit : </BodyText>
        <InputComponent 
         style={styles.textInput}
         textPlaceholder="Nouveau produit"
         onChangeHandler={inputHandler}
         inputValue={product}
         maxLength={10}

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
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    //flexGrow:1
    marginBottom: 15,
    borderRadius:20
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