
/**
 *  Cattle Navigation
 * @author tcaraccia
 * @link https://github.com/conectagro
 */

import React, { Component } from 'react'
import {
  TabNavigator
} from 'react-navigation'

import MarketScreen from '../screens/MarketScreen'
import GrowScreen from '../screens/GrowScreen'

import { colors } from '../constants'


export  const CattleNav = TabNavigator(
    {
      Liniers: {
        screen: MarketScreen,
        navigationOptions: () => {
          headerTitle: 'Mercado de Liniers'
        }
      },
      Rosario: {
        screen: MarketScreen,
        navigationOptions: () => {
          headerTitle: 'Mercado de Rosario'
        }
      },
      Invernada: {
        screen: GrowScreen,
        navigationOptions: () => {
          headerTitle: 'Invernada'
        }
      }
    },
    {
      lazy:true,
      tabBarPosition : 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        showIcon : false,
        showLabel : true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.LIGHT_GRAY,
        labelStyle: { fontSize:15 }
      }
    }
  )