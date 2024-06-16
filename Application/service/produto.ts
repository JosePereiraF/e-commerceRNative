import { AxiosResponse, AxiosError } from 'axios';
import { Api } from "./Api";


export interface Produto{
    pokeDex:number
    name:string
    valorUnitario:number
    imagem:string
    tipoPrimario:string
    tipoSecundario:string
}

export const GetAllPokemons =():Promise<AxiosResponse<Produto[] >> =>{
    return Api.get<Produto []>("pokemon")
    .then((response:AxiosResponse<Produto[]>)=>{
        return response;
    })
    .catch((error: AxiosError)=>{
        console.error(error.message);
        
         throw error;
     })
}


export const AddPokemon = (newPokemon:Produto):Promise<AxiosResponse<Produto>>=>{
    return Api.post<Produto>('pokemon',newPokemon)
    .then((reponse:AxiosResponse<Produto>)=>{
        return reponse;
    }).catch((error:AxiosError)=>{
        console.error("Erro encontrado "+error);
        
        throw error;
    })
}