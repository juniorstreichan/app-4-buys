import React from 'react';
import {View, ActivityIndicator, Text, FlatList} from 'react-native';
import useFetch from '../../service/useFetch';
import AppColors from '../../theme/colors';
import ProductItemCard from '../../components/ProductItemCard';

const ListOffers = ({navigation}) => {
  const {data, isLoadding, error} = useFetch('offers');

  return (
    <View>
      {error && <Text>{error.message}</Text>}
      {isLoadding && (
        <View>
          <ActivityIndicator size="large" color={AppColors.light} />
        </View>
      )}
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
