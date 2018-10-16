import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Splash from './layout/splash';
import Login from './layout/login';
import Dummy from './layout/Dummy';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()

export default class Application extends Component{
    render(){
        return (
            <Provider store={store}>
                <Route/>
            </Provider>
        )
    }
}

const Route = createStackNavigator(
    {
      Login : Dummy,
      Dummy: Login
    },
    {
      headerMode:'none'
    }
  )