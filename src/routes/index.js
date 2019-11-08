import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListOffers from '../screens/list/ListOffers';
import OfferDetails from '../screens/details/OfferDetails';
import Checkout from '../screens/checkout/CheckoutScreen';
import AppColors from '../theme/colors';

const Router = createAppContainer(
  createStackNavigator(
    {
      List: {
        screen: ListOffers,
        navigationOptions: {
          title: 'Opções',
        },
      },
      Details: {
        screen: OfferDetails,
        navigationOptions: {
          title: 'Detalhes',
        },
      },
      Checkout: {
        screen: Checkout,
        navigationOptions: {
          title: 'Pagamento',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: AppColors.secondary,
          height: 40,
          borderBottomWidth: 1,
          borderBottomColor: AppColors.primary,
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
