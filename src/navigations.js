/*
* ConectAgro Navigations
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Constants } from 'expo'

import { CattleNav } from './navigations/CattleNav'
import { CropNav } from './navigations/CropNav'

import FeedScreen from './screens/FeedScreen'


import { colors } from './constants'

const TAB_ICON_SIZE = 25



const TabMainNav = TabNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: () => ({
        headerTitle: 'Noticias',
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons size={TAB_ICON_SIZE} color={tintColor} name="home" />,
      }),
    },
    Cattle: {
      screen: CattleNav,
      navigationOptions: () => ({
        headerTitle: 'Ganado',
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons size={TAB_ICON_SIZE} color={tintColor} name="cow" />,
      }),
      
    },
    Crop: {
      screen: CropNav,
      navigationOptions: () => ({
        headerTitle: 'Granos',
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons size={TAB_ICON_SIZE} color={tintColor} name="barley" />,
      }),
    }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GRAY,
      style: {
        backgroundColor: colors.WHITE,
        height: 50,
        paddingVertical: 5,
      },
    },
  },
)


const AppMainNav = StackNavigator(
  {
    Home: {
      screen: TabMainNav,
    },
  },{
    navigationOptions:{
      headerStyle: { paddingTop: Constants.statusBarHeight}
    }
  }
)

class AppNavigator extends Component {
  render() {

    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })

    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user,
}))(AppNavigator);

export const router = AppMainNav.router;