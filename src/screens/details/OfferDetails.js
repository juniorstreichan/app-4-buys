import React from 'react';
import {Text, View} from 'react-native';
import useFetch from '../../service/useFetch';
import Loader from '../../components/Loader';

const OfferDetails = ({navigation}) => {
  const offerId = navigation.state.params.id;
  const {data, isLoadding, error} = useFetch(`offer/${offerId}`);

  return (
    <View>
      {isLoadding && <Loader />}
      {data && <Text>{data.title}</Text>}
    </View>
  );
};

export default OfferDetails;
