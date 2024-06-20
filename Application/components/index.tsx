import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Produto } from '../service/produto'

interface CardProps{
    item: Produto
}
export const Card =({item}:CardProps) =>{
  function tipo<String>(){
    const resposta = item.tipoSecundario !== "Nulo" ? item.tipoSecundario : "";
        return item.tipoPrimario+ (resposta ?  `/ ${resposta}` : "");
  }
  return(
    <View>
      <Image source={item.imagem} style={{width:65, height:85}}/>
      <Text>
        {item.name}
      </Text>
      <Text>
        {tipo()}
      </Text>
    </View>
  )
}
