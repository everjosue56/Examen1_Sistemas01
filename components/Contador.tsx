import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '@/style/global.style'
import FAB from '../components/ContadorFAB';


const [count, SetCount ] = useState(0);

export const Contador = () => {
  return (
    <View>
    <View>
      <Text style = { globalStyles.titleTemperatura}>Temperatura App </Text>   
    </View>
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCount}>{count}</Text>

       

      <FAB label ='+'
       onPress={() => SetCount(count + 1)}
       onLongPress={() => SetCount(0)}
       position ='right'

      />
    
      <FAB label ='-'
       onPress={() => SetCount(count - 1)}
       onLongPress={() => SetCount(0)}
       position='left'
      />

    </View>
    </View>
    
  )
}

