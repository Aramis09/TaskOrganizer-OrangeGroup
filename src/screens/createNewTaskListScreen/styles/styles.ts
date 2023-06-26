import { StyleSheet } from 'react-native';
export const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0E1820',
    display:"flex",
    alignItems:"center",
  },
  titleContainer:{
  },
  mainText:{
    color:"white",
    textAlign:"center",
    fontSize:20
  },
  inputTitle:{
    width:390,
    height:40,
    textAlign:"center",
    fontSize:15,
    backgroundColor: "#FF8C00",
    borderRadius:100
  },
  inputTask:{
    flex:1,
    width:1000,
  },
  sendButton:{
    width:150,
    height:30,
    marginBottom:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FF8C00",
    borderRadius:3,
  },
  text:{
    color:"white",
    backgroundColor:"red",
    fontSize:10
  }
})