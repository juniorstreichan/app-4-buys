import React from 'react';
import {ProductItem} from '../../types';
import {CardImage, CardText, Container, CardPrice} from './styles';
import Button from '../Button';

type Props = {
  item: ProductItem,
  onAction: Function,
};

const ProductItemCard = ({item, onAction}: Props) => {
  return (
    <Container>
      <CardImage source={{uri: item.image.url}} />
      <CardText>{item.title}</CardText>
      <CardPrice>R$ {item.price}</CardPrice>
      <Button onPress={onAction} title="Comprar" />
    </Container>
  );
};

export default ProductItemCard;
