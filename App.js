import { StyleSheet, View, FlatList, Alert, Modal, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react'
import Product from './components/Product'
import AddProduct from './components/AddProduct'

export default function App() {

  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)


  const addProduct = (name) => {
    if (name.length > 2) {
      const idString = Date.now().toString();
      setProducts(currentMyProducts => [{ key: idString, name: name }, ...currentMyProducts])
    }
    else {
      setShowModal(true)
    }
  }

  const deleteProduct = (key) => {
    setProducts(currentMyProducts => {
      return currentMyProducts.filter(product => product.key !== key)
    })

  }
  return (
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
              <Text styles={styles.modalHeaderText}>Hello world</Text>
            </View>
            <View style={styles.modalBody}>
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
      <AddProduct addProduct={addProduct} />
      <View style={styles.items}>
        <FlatList
          data={products}
          renderItem={({ item }) => <Product deleteProduct={deleteProduct} name={item.name} idString={item.key} />}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60
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
    backgroundColor: "white",
    width: "90%",
    height: 250,
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
  }

});
