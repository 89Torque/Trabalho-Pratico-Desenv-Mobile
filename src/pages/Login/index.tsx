import React, { useEffect, useState } from "react"
import { Ionicons } from '@expo/vector-icons'
import { View, Text, Pressable, TextInput } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/core"

import storage from '../../repositories/storage'
import { TypeRoutes } from "../../routes"
import { userService } from "../../services/user.service"

import styles from "./styles"

export default function Login() {
   const navigation = useNavigation<NavigationProp<TypeRoutes>>()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   useEffect(() => {
      navigation.setOptions({
         headerRight: () => ( 
            <Ionicons
               name="add" 
               size={25} 
               color="#e95736"
               onPress={() => navigation.navigate('SignUp')}
               margin={100}                  
            />        
         )
      })
   })

   const login = async() => {
      const token = await userService.login(email, password)
      if(token){
         const user = await userService.getUser(token)
         await storage.save({ token, user });
         navigation.navigate('Products')
      } else {
         alert('Login inválido!')
      }
   }

   return (
      
      <View style={styles.container}>
         <TextInput 
            style={styles.input} 
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail" />
         <TextInput 
            style={styles.input} 
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            placeholder="Senha" />

         <Pressable style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
         </Pressable>         
      </View>
  );
}

