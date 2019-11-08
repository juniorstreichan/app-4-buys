import React from 'react';
import {FlatList, Image, View} from 'react-native';
import Loader from '../../components/Loader';
import useFetch from '../../service/useFetch';
import AppColors from '../../theme/colors';
import {DescriptionText, DetailsContainer, CategoryText} from './styles';

const OfferDetails = ({navigation}) => {
  const offerId = navigation.state.params.id;
  const {data, isLoadding, error} = useFetch(`offer/${offerId}`);

  return (
    <View>
      {isLoadding && <Loader />}

      {data && (
        <>
          <FlatList
            contentContainerStyle={{backgroundColor: AppColors.primary}}
            data={data.images}
            keyExtractor={(item, index) => `OfferDetails-${index}`}
            renderItem={({item}) => (
              <Image
                source={{uri: item.url}}
                style={{width: 300, height: 250}}
              />
            )}
            horizontal
          />
          <DetailsContainer>
            <CategoryText> {data.category}</CategoryText>
            <DescriptionText>{data.title}</DescriptionText>
          </DetailsContainer>
        </>
      )}
    </View>
  );
};

export default OfferDetails;
