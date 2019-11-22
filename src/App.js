/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 * All components
 */
import Welcome from './modules/welcome/Welcome';
import Login from './modules/authenticate/Login';
import Register from './modules/register/Register';
import Home from './modules/chef/home/Home';
import Menu from './modules/Menu';
import Event from './modules/chef/Event/Event';
import Reservation from './modules/chef/Reservation/Reservation';
import EventNew from './modules/chef/Event/EventNew';

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Register: Register,
    Home: Home,
    Menu: Menu,
    Event: Event,
    Reservation: Reservation,
    EventNew: EventNew
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none', /*Hide header bar*/
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        headerVisible: false,
        backgroundColor: '#083C6A',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
