import { StyleSheet, View , Text, Pressable } from 'react-native';
import React from 'react';

const Product = ({name, deleteProduct, idString}) => {
    return (
        <Pressable onPress={() => deleteProduct(idString)}>
            <View style={styles.items} >
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
items:{
    marginTop:5,
},
element: {
  backgroundColor:"mediumseagreen",
  color:"white",
  padding: 5,

}
});

export default Product;