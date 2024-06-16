import { AxiosResponse } from "axios";
import { GetAllPokemons } from "../service/produto";
import { useState } from "react";
import { Produto } from "../service/produto";
export const [pokemons,setPokemons] =useState<Produto[]>([]);//possivel

export function ListarPokemons(){
    GetAllPokemons()
    .then((response: AxiosResponse<Produto[]>)=>{
        setPokemons(response.data)
        return response.data;
    })
    .catch((error)=>{
        console.error(error);
    })
}
