import React from 'react';
import {View, Text, Button} from 'react-native';
const ListOffers = ({navigation}) => {
  return (
    <View>
      <Text>ListOffers</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate('OfferDetails')}
      />
    </View>
  );
};

export default ListOffers;
