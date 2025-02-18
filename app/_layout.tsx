import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { globalStyles } from '../style/global.style'

const _layout = () => {

  const [] = useFonts({
    NotoSans: require('../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf')
  })

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style='light'/>
    </View>
  )
}

export default _layout