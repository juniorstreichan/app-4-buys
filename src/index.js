import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import AppColors from './theme/colors';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={AppColors.secondary} />
      <SafeAreaView style={{backgroundColor: AppColors.dark, flex: 1}}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
