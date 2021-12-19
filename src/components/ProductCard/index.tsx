import React from "react"
import { Text, View } from "react-native"

import { Product } from "../../models/product.model"

import styles from './styles'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {

   return (
      <View style={styles.container}>
         <Text>Modelo: {product.name}</Text>
         <Text>Preço: R${product.price}</Text>
         <Text>Quantidade: {product.amount}</Text>
         <Text>Fabricante: {product.factory.name}</Text>
      </View>
   )

}