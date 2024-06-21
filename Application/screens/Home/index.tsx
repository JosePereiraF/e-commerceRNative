import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { CardPokemon } from "../../components/CardProduto";
import { GetAllPokemons, Produto } from "../../service/produto";
import { AxiosResponse } from "axios";
import { Feather } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export default function Home() {
  const [pokemons, setPokemons] = useState<Produto[]>([]); //possivel
  const [pokemonsPorPagina] = useState(30);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [pesquisar, setPesquisar] = useState('')
  const pages = Math.ceil(pokemons.length / pokemonsPorPagina)
  const startIndex = paginaAtual * pokemonsPorPagina;
  const endIndex = startIndex + pokemonsPorPagina;
  const pokemonsPaginados = pokemons.slice(startIndex, endIndex)

  function ListarPokemons() {
    GetAllPokemons()
      .then((response: AxiosResponse<Produto[]>) => {
        // console.log(response.data);
        setPokemons(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    ListarPokemons();
  }, []);

  const resetarPaginacao = () => {
    setPaginaAtual(0);
  };

  const pokemonFiltro = (pesquisando: string) => {
    if (pesquisando === "") {
      GetAllPokemons();
      resetarPaginacao();
      return;
    }
    const pokemonFiltrado = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pesquisando.toLowerCase())
    );
    setPesquisar(pesquisando);
    resetarPaginacao();
  };

  const paginaAnterior = () => {
    if (paginaAtual >  0) {
      setPaginaAtual(paginaAtual - 1)
  }
};

  const proximaPagina = () =>{
    if (paginaAtual < pages - 1){
      setPaginaAtual(paginaAtual +1)
  }
};


  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={pokemonFiltro}
          value={pesquisar}
        />

          <FlatList
            scrollEnabled={false}
            data={pokemonsPaginados}
            keyExtractor={(item) => item.pokeDex.toString()}
            renderItem={({ item }) => {
              return <CardPokemon item={item} />;
            }}
          />
          <View style={styles.paginationContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={paginaAnterior}
            disabled={paginaAtual === 0}
            >

              <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.navigationButton}
            onPress={proximaPagina}
            disabled={paginaAtual === pages - 1}
            >
             <Feather name="chevron-right" size={24} color="black" />  
            </TouchableOpacity>
            
            
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  navigationButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
  },
});