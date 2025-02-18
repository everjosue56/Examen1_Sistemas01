import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
              flex: 1,
    },

    titleTemperatura : {
        textAlign:"center",
        padding: 10,
        fontSize:30,
        fontFamily: 'NotoSans',
        fontWeight: 300,
        marginTop : 80,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textCount: {
         fontSize:120, 
         fontWeight:'100',
      },
      floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#B82132',
        padding: 20,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        elevation: 3
      },
      floatingButtonText: {
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',
        width: 25,
        height: 25
      },
    
      positionLeft :{
        left: 20,
      },
      positionRight: {
        right: 20,
      }
})