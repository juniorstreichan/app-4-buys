import React from 'react';
import {View} from 'react-native';
import {CreditCardInput} from 'react-native-credit-card-input';
import AppColors from '../../theme/colors';

const CheckoutScreen = ({navigation}) => {
  return (
    <View>
      <CreditCardInput
        labels={{number: 'Nº DO CARTÃO', cvc: 'CVC/CCV', expiry: 'VÁLIDADE'}}
        labelStyle={{color: AppColors.light}}
        inputStyle={{color: AppColors.light}}
        cardScale={0.8}
        autoFocus
      />
    </View>
  );
};

export default CheckoutScreen;
