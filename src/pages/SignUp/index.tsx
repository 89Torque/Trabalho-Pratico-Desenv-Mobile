import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/core"

import { User } from "../../models/user.model"
import { TypeRoutes } from "../../routes"
import { userService } from "../../services/user.service"
import storage from "../../repositories/storage"

import styles from "./styles"

export default function SignUp() {

   const navigation = useNavigation<NavigationProp<TypeRoutes>>()

   const [name, setName] = useState<string>('')
   const [age, setAge] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
   

   const createUser = async() => {

      if (!name || !age || !email || !password){
         alert('Todos os campos são obrigatórios!')
         return
      }

      if (password !== passwordConfirmation) {
         alert('A senha não confere!')
         return
     }       

      const user: User = {
         name,
         age,
         email,
         userPassword: password
      }

      const token = await userService.createUser(user)
      if (token) {         
         const user = await userService.getUser(token)
         await storage.save({ token, user })
         navigation.navigate('Products')
      } else {
         alert('Usuário já existente!')
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Preencha seus dados</Text>
         <TextInput 
            style={styles.input} 
            value={name}
            onChangeText={setName}
            placeholder="Nome" />
         <TextInput 
            style={styles.input} 
            value={age}
            keyboardType='numeric'
            onChangeText={setAge}
            placeholder="Idade"/>
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
         <TextInput 
            style={styles.input} 
            value={passwordConfirmation}
            secureTextEntry
            onChangeText={setPasswordConfirmation}
            placeholder="Confirmar Senha" />

         <Pressable style={styles.button} onPress={createUser}>
            <Text style={styles.buttonText}>Cadastrar</Text>
         </Pressable>
      </View>
  );
}