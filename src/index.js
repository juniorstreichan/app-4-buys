import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import AppColors from './theme/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={AppColors.secondary} />
      <SafeAreaView style={{backgroundColor: AppColors.dark, flex: 1}}>
        <Text style={{color: AppColors.light}}>TESTE</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
