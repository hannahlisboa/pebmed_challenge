import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';

const MainStack = createStackNavigator({
  Home: Main,
});

const Routes = createAppContainer(MainStack);

export default Routes;
