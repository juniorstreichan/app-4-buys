import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import useFetch from '../../service/useFetch';
import Loader from '../../components/Loader';
import AppColors from '../../theme/colors';
import {CardText} from '../../components/ProductItemCard/styles';

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
          <CardText>{data.title}</CardText>
        </>
      )}
    </View>
  );
};

export default OfferDetails;
