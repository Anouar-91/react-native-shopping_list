import { StyleSheet, View , Text, Pressable } from 'react-native';
import React from 'react';

const Product = ({name, deleteProduct, idString}) => {
    return (
        <Pressable 
        style={({pressed}) =>[
            {backgroundColor: pressed ? "red" : "blue"}
        ]}
        onPress={() => deleteProduct(idString)}

        >
            <View style={styles.items} >
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
items:{
    marginTop:5

},
element: {
  backgroundColor:"#ffb6c1",
  padding: 5,

}
});

export default Product;