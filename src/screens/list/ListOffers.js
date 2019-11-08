import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Loader from '../../components/Loader';
import ProductItemCard from '../../components/ProductItemCard';
import useFetch from '../../service/useFetch';

const ListOffers = ({navigation}) => {
  const {data, isLoadding, error} = useFetch('offers');

  return (
    <View>
      {error && <Text>{error.message}</Text>}
      {isLoadding && <Loader />}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItemCard
            onAction={() =>
              navigation.navigate('Details', {
                id: item.id,
              })
            }
            item={item}
          />
        )}
      />
    </View>
  );
};

export default ListOffers;
