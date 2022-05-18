import { StyleSheet, View , Text, Pressable } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Color from '../constants/colors'

const Product = ({name, deleteProduct, idString}) => {
    return (
        <Pressable onPress={() => deleteProduct(idString)}>
            <View style={styles.items} >
            <FontAwesome name="remove" size={20} color={Color.white} />
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
items:{
    marginTop:10,
    backgroundColor: Color.info,
    borderRadius: 6,
    flexDirection:"row",
    alignItems: "center",
    padding: 15
},
element: {
  backgroundColor:"mediumseagreen",
  color:"white",
  fontSize:17,
  marginLeft:20,
  

}
});

export default Product;