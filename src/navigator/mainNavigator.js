import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95930Navigator from '../features/UserProfile95930/navigator';
import Tutorial95929Navigator from '../features/Tutorial95929/navigator';
import NotificationList95901Navigator from '../features/NotificationList95901/navigator';
import Settings95900Navigator from '../features/Settings95900/navigator';
import Settings95892Navigator from '../features/Settings95892/navigator';
import UserProfile95890Navigator from '../features/UserProfile95890/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95930: { screen: UserProfile95930Navigator },
Tutorial95929: { screen: Tutorial95929Navigator },
NotificationList95901: { screen: NotificationList95901Navigator },
Settings95900: { screen: Settings95900Navigator },
Settings95892: { screen: Settings95892Navigator },
UserProfile95890: { screen: UserProfile95890Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
