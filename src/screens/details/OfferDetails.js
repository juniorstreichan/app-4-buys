import React from 'react';
import {View, Text, Button} from 'react-native';

const OfferDetails = ({navigation}) => {
  return (
    <View>
      <Text>OfferDetails</Text>
      <Button title="Comprar" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default OfferDetails;
