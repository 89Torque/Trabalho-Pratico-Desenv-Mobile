import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e95736',
      color: '#F5F5F5',
   },
   input: {
      height: 50,
      width: '80%',
      fontSize: 16,
      backgroundColor: '#f6f6f6',
      color: '#1c1c1c',
      margin: 8,
      padding: 8,      
      borderRadius: 4,
      elevation: 2
   },
   button: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      elevation: 4,
      borderRadius: 4,
      marginTop: 32,
      width: '60%',
   },
   buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#e95736',
   }
});