import { View, Text } from 'react-native'
import React from 'react'
import { Produto } from '../service/produto'

interface CardProps{
    item: Produto
}
export const Card =({item}:CardProps) =>{

  return(
    <View>
      <Text>
        {item.name}
      </Text>
    </View>
  )
}