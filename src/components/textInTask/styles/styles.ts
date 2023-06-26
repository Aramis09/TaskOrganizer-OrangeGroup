import { StyleSheet,Dimensions } from 'react-native';
export const styles  = StyleSheet.create({
  container: {
    display:"flex",
    width:Dimensions.get('window').width - 30,
    flexDirection:"row",
    alignItems:"center",
    margin:10,
    overflow: 'hidden',
  },
  inputText:{
    color:"white",
    flexWrap: 'wrap',
    width:Dimensions.get('window').width - 80,
    marginLeft:10
  }
})

