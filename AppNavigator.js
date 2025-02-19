import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import TransactionList from '../screens/TransactionList';
import AddTransaction from '../screens/AddTransaction';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    TransactionList: TransactionList,
    AddTransaction: AddTransaction,
  },
  { initialRouteName: 'Login' }
);

export default createAppContainer(AppNavigator);
