import { globalStyles } from "@/style/global.style";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TemperatureControlApp() {
  const [temperature, setTemperature] = useState(20);


  // funciones para incrementar y disminuir el contador 
  const increaseTemperature = () => setTemperature(prev => prev + 1);
  const decreaseTemperature = () => setTemperature(prev => prev - 1);

  // funcion para asigar el color segun la cantidad
  const getTemperatureColor = () => {
    if (temperature < 15) return "blue";
    if (temperature <= 25) return "green";
    return "red";
  };

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.temperatureText, { color: getTemperatureColor() }]}> 
        {temperature}°C
      </Text>
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={increaseTemperature}>
          <Text style={globalStyles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={decreaseTemperature}>
          <Text style={globalStyles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

