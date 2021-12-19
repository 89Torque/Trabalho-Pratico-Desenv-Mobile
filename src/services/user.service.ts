import axios from "axios"
import { User } from './../models/user.model';

class UserService {

   private api = axios.create({
      baseURL: 'https://example-ecommerce.herokuapp.com'
   })

   async login(email: string, password: string): Promise<string | undefined> {
      try {
         const response = await this.api.post('user/login', {login:email, password})
         return response.data
      } catch (error) {
         console.error(error)
         return
      }
   }

   async createUser(user: User): Promise<string | undefined>{
      try {
         const response = await this.api.post<string>('/user/customer/add', user)
         return response.data
      } catch (error) {
         console.error(error)
         return
      }
   }

   async getUser(token: string | undefined) {
      try {
         const header = { headers: { Authorization: `Bearer ${token}` } }
         const response = await this.api.get<User>('/user/logged', header)         
         return response.data
      } catch (error) {
         console.error(error)
         return
      }
   }
}

export const userService = new UserService();