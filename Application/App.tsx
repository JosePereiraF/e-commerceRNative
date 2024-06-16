import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Card } from './components';
import { GetAllPokemons } from "./service/produto";
import { Produto } from './service/produto';
import { AxiosResponse } from "axios";
import { useState } from "react";

export default function App() {
  const [pokemons,setPokemons] =useState<Produto[]>([]);//possivel

  function ListarPokemons(){
    GetAllPokemons()
    .then((response: AxiosResponse<Produto[]>)=>{
        console.log(response.data);
        
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
<View>
{/* <FlatList
data={pokemons}
renderItem={({ item })=>{
  return <Card item={item}/>
}}
/> */}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});