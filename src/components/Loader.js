import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AppColors from '../theme/colors';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={AppColors.light} />
    </View>
  );
};

export default Loader;
