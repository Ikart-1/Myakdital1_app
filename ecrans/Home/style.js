import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const dashboardStyles = StyleSheet.create({
    header:{
      backgroundColor: 'blue',
      flexDirection: 'column' ,
    //   justifyContent:'flex-start',
      paddingHorizontal: PADDING.horizontal,
      paddingVertical: PADDING.vertical,
      height: 270,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingTop:50,
    },
    imgtext:{
        flexDirection: 'row' ,
        marginBottom:30,
        // justifyContent:'flex-start',
    },
    userImg:{
       width: 60,
       height: 60,
       borderRadius: 60 / 2,
       marginRight: 30,
    },
    userwelcome:{
        fontSize:18,
        color:'white',
    },
    userName:{
        fontSize:18,
        color:'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        position: 'relative',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'white',
        color:'white',
        borderRadius: 25 / 2,
      },
      iconsearch: {
        position: 'absolute',
        right: 25,
        top: 20,
      },
});

export default dashboardStyles;