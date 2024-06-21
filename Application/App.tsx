import { StyleSheet, Text, View } from 'react-native';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useEffect,useState } from 'react';
import { CardPokemon } from './components/CardProduto';
import { GetAllPokemons,Produto } from "./service/produto";
import { AxiosResponse } from "axios";
import Routes from './Routes';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {


return (
  <NavigationContainer>

  <GestureHandlerRootView>

  <Routes/>

  </GestureHandlerRootView>
  </NavigationContainer>
);
}

