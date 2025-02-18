import { globalStyles } from "@/style/global.style";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RandomColorApp() {
  const [bgColor, setBgColor] = useState("#ffffff");


//   Funcion para generar el color
  const generateRandomColor = () => {
    const randomHex = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBgColor(randomHex);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>      
    <Text> Aplicacion de Cambio De Color  </Text>
      <TouchableOpacity style={styles.button} onPress={generateRandomColor}>
        <Text style={styles.buttonText}>Cambiar color</Text>
      </TouchableOpacity>
    </View>
  );
}

// aplica aparte el estilo de estos para no confunfir con los de la otra app 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      backgroundColor: "black",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },

})