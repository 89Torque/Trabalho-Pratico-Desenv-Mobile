import React, { useEffect, useState } from "react"
import { View, FlatList } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from "@react-navigation/core"

import { TypeRoutes } from "../../routes"
import {Product} from '../../models/product.model'
import storage from "../../repositories/storage"
import { productService } from "../../services/product.service"

import ProductCard from "../../components/ProductCard"

import styles from "./styles"

export default function Products() {

   const navigation = useNavigation<NavigationProp<TypeRoutes>>();

   const [products, setProducts] = useState<Product[]>()
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      navigation.setOptions({
         headerLeft: () => null,
         headerRight: () => ( 
            <Ionicons
               name="exit-outline" 
               size={25} 
               color="#e95736"
               onPress={() => navigation.navigate('Login')}                                
            />
         )
      })

      getProducts();
   }, [])

   const getProducts = async () => {
      setLoading(true)

      storage.get().then(async (user) => {
         const token = user.token as string
         if (token) {
            const productList = await productService.getProducts(token);
            if (productList) {
               setProducts(productList)
               setLoading(false)
            } else alert('Ocorreu um erro ao recuperar os produtos!')
            
         } else {
            setLoading(false)
            alert('Sessão expirada!')
            navigation.goBack()
         }
      })
   }

   return (
      <View style={styles.container}>
         <FlatList 
            data={products}
            onRefresh={getProducts}
            refreshing={loading}
            renderItem={({ item }) => <ProductCard product={item} /> }
         />
      </View>
  );
}