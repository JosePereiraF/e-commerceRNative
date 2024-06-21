import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { GetAllPokemons, Produto } from '../../service/produto';

interface CardProps {
  item: Produto;
}



export const CardPokemon = ({ item }: CardProps) => {
  function tipo() {
    const resposta = item.tipoSecundario !== "Nulo" ? item.tipoSecundario : "";
    return item.tipoPrimario + (resposta ? `/ ${resposta}` : "");
  }

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} style={styles.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Type: {tipo()}</Paragraph>
        <Paragraph>Valor: R$ {item.valorUnitario}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => { /* Lógica do botão */ }}>
          Adicionar ao carrinho
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: 345,
  },
  image: {
    height: 200,
  },
});