import React from 'react';
import {FlatList, Image, View, Text} from 'react-native';
import Loader from '../../components/Loader';
import useFetch from '../../service/useFetch';
import AppColors from '../../theme/colors';
import {
  DescriptionText,
  DetailsContainer,
  CategoryText,
  ValueText,
  PayButton,
} from './styles';

const OfferDetails = ({navigation}) => {
  const offerId = navigation.state.params.id;
  const {data, isLoadding, error} = useFetch(`offer/${offerId}`);

  return (
    <View>
      {isLoadding && <Loader />}
      {error && <Text>{error.message}</Text>}
      {data && (
        <>
          <FlatList
            contentContainerStyle={{backgroundColor: AppColors.primary}}
            data={data.images}
            keyExtractor={(item, index) => `OfferDetails-${index}`}
            renderItem={({item}) => (
              <Image
                source={{uri: item.url}}
                style={{width: 300, height: 220}}
              />
            )}
            horizontal
          />
          <DetailsContainer>
            <CategoryText>{data.category}</CategoryText>
            <DescriptionText>{data.title}</DescriptionText>
            <ValueText>R$ {data.price}</ValueText>
            <PayButton
              title="Pagar"
              onPress={() => navigation.navigate('Checkout', {offer: data})}
            />
          </DetailsContainer>
        </>
      )}
    </View>
  );
};

export default OfferDetails;
