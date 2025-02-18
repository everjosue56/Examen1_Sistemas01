import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/style/global.style';

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
    position?: "left" | "right"; 
}


export default function FAB({
    label,
    onPress,
    onLongPress,
    position = "left"
} : Props) {
  return (
     <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          style = {({pressed}) => [globalStyles.floatingButton, 
            position == 'right' ? globalStyles.positionRight
            :globalStyles.positionLeft,
            pressed ? {opacity: 0.7 } : {opacity : 1}
          ]}>
              <Text style ={globalStyles.floatingButtonText}>{label}</Text>
          </Pressable>

          

         
  )
}


    
 