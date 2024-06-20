import { StyleSheet, Text, View } from 'react-native';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useEffect,useState } from 'react';
import { Card } from './components/CardProduto';
import { GetAllPokemons,Produto } from "./service/produto";
import { AxiosResponse } from "axios";


export default function App() {
  const [pokemons,setPokemons] =useState<Produto[]>([]);//possivel

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
  
  <GestureHandlerRootView>

  <ScrollView>
<View  style={styles.container}>

<FlatList
scrollEnabled={false}
data={pokemons}
renderItem={({ item })=>{
  return <Card item={item}/>
}}
/>
</View>
  </ScrollView>
  </GestureHandlerRootView>
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