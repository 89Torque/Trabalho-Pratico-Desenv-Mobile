import axios from "axios"
import { Product } from './../models/product.model'

class ProductService {

   private api = axios.create({
      baseURL: 'https://example-ecommerce.herokuapp.com'
   })

   async getProducts(token: string): Promise<Product[] | undefined>{
      try {
         const header = { headers: { Authorization: `Bearer ${token}` } }
         const response = await this.api.get<Product[]>('/product/list', header)         
         return response.data
      } catch (error) {
         console.error(error)
         return
      }
   }
}

export const productService = new ProductService();