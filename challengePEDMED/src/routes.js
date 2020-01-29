import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Detail from '~/pages/Detail';
const MainStack = createStackNavigator({
  Home: Main,
  Detail,
});

const Routes = createAppContainer(MainStack);

export default Routes;
