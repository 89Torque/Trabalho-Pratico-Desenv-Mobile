import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginPage from '../pages/Login'
import SignUpPage from '../pages/SignUp'
import ProductsPage from '../pages/Products'

export type TypeRoutes = {
   Login: undefined;
   SignUp: undefined;
   Products: undefined;
}

const Stack = createNativeStackNavigator<TypeRoutes>()

export default function Routes() {
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />
            <Stack.Screen name="Products" component={ProductsPage} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}