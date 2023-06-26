import { StyleSheet,Dimensions } from 'react-native';
export const styles  = StyleSheet.create({
  container: {
    flex:1,
    width:Dimensions.get('window').width ,
    
  },
  touchable:{
    marginTop: 30
  },
  conatinerData: {
    backgroundColor:"#1B6647",
    padding: 15,
    display:"flex",
    flexDirection:"row",
    textAlign:"left",
    justifyContent:"space-between"
  },
})