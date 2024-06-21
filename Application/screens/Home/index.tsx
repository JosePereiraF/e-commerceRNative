import { View , StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { CardPokemon } from '../../components/CardProduto'
import { GetAllPokemons, Produto } from '../../service/produto';
import { AxiosResponse } from 'axios';

export default function Home() {
    const [pokemons,setPokemons] =useState<Produto[]>([]);//possivel
    const [pokemonsPorPagina, setPokemonsPorPagina] = useState(30);

    function ListarPokemons(){
      GetAllPokemons()
      .then((response: AxiosResponse<Produto[]>)=>{
          // console.log(response.data);
          setPokemons(response.data)
          return response.data;
      })
      .catch((error)=>{
          console.error(error);
      })
  }
  
  useEffect(()=>{
  ListarPokemons();
  },[]) 
  
  
  
    return (
    <ScrollView>
<View  style={styles.container}>

<FlatList
scrollEnabled={false}
data={pokemons}
renderItem={({ item })=>{
  return <CardPokemon item={item}/>
}}
/>
</View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    });