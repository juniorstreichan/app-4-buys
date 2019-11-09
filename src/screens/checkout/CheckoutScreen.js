import React, {useState} from 'react';
import {CreditCardInput} from 'react-native-credit-card-input';
import {StackActions} from 'react-navigation';

import AppColors from '../../theme/colors';
import {
  CheckoutContainer,
  ResumeCard,
  ResumeTitle,
  ResumeItem,
  ResumeTotal,
} from './styles';
import Button from '../../components/Button';

const CheckoutScreen = ({navigation}) => {
  const {offer} = navigation.state.params;
  const [validCard, setValidCard] = useState(false);
  return (
    <CheckoutContainer>
      {!validCard ? (
        <CreditCardInput
          labels={{number: 'Nº DO CARTÃO', cvc: 'CVC/CCV', expiry: 'VALIDADE'}}
          labelStyle={{color: AppColors.light}}
          inputStyle={{color: AppColors.light}}
          cardScale={1}
          autoFocus
          onChange={({valid}) => setValidCard(valid)}
        />
      ) : (
        <ResumeCard>
          <ResumeTitle>Resumo da Compra</ResumeTitle>
          <ResumeItem>{offer.title}</ResumeItem>
          <ResumeItem>TOTAL:</ResumeItem>
          <ResumeTotal>R$ {offer.price}</ResumeTotal>
          <Button
            title="Pronto !"
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          />
        </ResumeCard>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutScreen;
