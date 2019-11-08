import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListOffers from '../screens/list/ListOffers';
import OfferDetails from '../screens/details/OfferDetails';
import AppColors from '../theme/colors';

const Router = createAppContainer(
  createStackNavigator(
    {
      List: {
        screen: ListOffers,
        path: 'list',
      },
      Detais: {
        screen: OfferDetails,
        path: 'details/:id',
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: AppColors.secondary,
          height: 45,
        },
        headerTintColor: AppColors.light,
      },
      cardStyle: {
        backgroundColor: AppColors.dark,
        color: AppColors.light,
      },
    },
  ),
);

export default Router;
