import { StyleSheet, View, FlatList, Image, Modal, Text, Pressable, Button, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react'
import Product from './components/Product'
import AddProduct from './components/AddProduct'
import DismissKeyboard from './components/DismissKeyboard'
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header'
import Colors from './constants/colors'
import AppLoading from 'expo-app-loading';
import {useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers'
 
export default function App() {

  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)

  const [fontsLoaded, error] = useFonts({
    BangersRegular: Bangers_400Regular,
    'inter-Bold' : require('./assets/fonts/Inter-Bold.ttf'),
    'inter-Regular' : require('./assets/fonts/Inter-Regular.ttf'),
    'pacifico-Regular' : require('./assets/fonts/Pacifico-Regular.ttf')
  })
  if(!fontsLoaded){
    return (
      <AppLoading 
      />
    )
  }

  const addProduct = (name) => {
    if (name.length > 2) {
      const idString = Date.now().toString();
      setProducts(currentMyProducts => [{ key: idString, name: name }, ...currentMyProducts])
    }
    else {
      setShowModal(true)
    }
  }

  const cancelNewProduct = () => {
    setDisplayModal(false)
  }
  const deleteProduct = (key) => {
    setProducts(currentMyProducts => {
      return currentMyProducts.filter(product => product.key !== key)
    })
  }
  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={{ uri: "https://cdn.pixabay.com/photo/2021/08/18/19/12/abstract-background-6556364_1280.jpg" }}
      >
        <Header />
        <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="fade"
          hardwareAccelerated={true}
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text styles={styles.modalHeaderText}>OUPS !!</Text>
              </View>
              <View style={styles.modalBody}>

                <Image
                  source={require('./assets/cross_red.png')}
                  /*               source={{uri: "https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_1280.png"}} */
                  style={styles.crossRed128}
                />


                <Text style={styles.modalBodyText}>Merci d'inscire au minimum 2 caractères.</Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable style={styles.pressableBtnModal} onPress={() => setShowModal(false)}>
                  <Text style={styles.modalBtn}>OK</Text>

                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <ButtonComponent onPressHandler={() => setDisplayModal(true)} style={styles.btnAddProduct} >Nouveau produit</ButtonComponent>

        <AddProduct addProduct={addProduct} displayModal={displayModal} cancelNewProduct={cancelNewProduct} />
        <View style={{marginBottom:80}}>
          <FlatList
            data={products}
            renderItem={({ item }) => <Product deleteProduct={deleteProduct} name={item.name} idString={item.key} />}
          />

        </View>
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  modalContent: {
    backgroundColor: Colors.white,
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,

  },
  modalFooter: {
    width: "100%",

  },
  pressableBtnModal: {
    backgroundColor: "#20b2aa",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    padding: 16,
  },
  crossRed128: {
    width: 100,
    height: 100,
  },
  btnAddProduct: {
    backgroundColor: Colors.danger,
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    marginBottom:20,
  },
  bgImage:{
    flex:1,
  }

});
