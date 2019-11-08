import React from 'react';
import {View, Text} from 'react-native';
import {Shape, ButtonText} from './styles';

type Props = {
  title: string,
};

const Button = ({title, ...props}: Props) => {
  return (
    <Shape {...props}>
      <ButtonText>{title}</ButtonText>
    </Shape>
  );
};

export default Button;
