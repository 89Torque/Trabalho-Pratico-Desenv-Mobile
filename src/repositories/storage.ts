import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
   private KEY = "USER_TOKEN"

   public async get(){
      const json = await AsyncStorage.getItem(this.KEY)
      return json ? JSON.parse(json) : null
   }

   public async save(userInfo: any){
      const userString = JSON.stringify(userInfo)
      await AsyncStorage.setItem(this.KEY, userString)
   }
}
export default new Storage()