import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Produto } from '../../service/produto'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface CardProps{
    item: Produto
}
export const CardPokemon =({item}:CardProps) =>{
  function tipo<String>(){
    const resposta = item.tipoSecundario !== "Nulo" ? item.tipoSecundario : "";
        return item.tipoPrimario+ (resposta ?  `/ ${resposta}` : "");
  }
  return (
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src={item.imagem}
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { item.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Type: {tipo()}
          <br />
          Valor: R$ {item.valorUnitario}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{backgroundColor: '#D3D3D3'}}>
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}
