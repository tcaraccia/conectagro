
/**
 *  Crop Navigation
 * @author tcaraccia
 * @link https://github.com/conectagro
 */

import React, { Component } from 'react'
import {
  TabNavigator,
} from 'react-navigation'

import CropScreen from '../screens/CropScreen'

import { colors } from '../constants'


export const CropNav = TabNavigator(
    {
      Rosario: {
        screen: CropScreen,
        navigationOptions: () => {
          headerTitle: 'Rosario'
        }
      },
      BsAs: {
        screen: CropScreen,
        navigationOptions: () => {
          headerTitle: 'Buenos Aires'
        }
      },
      Bahia: {
        screen: CropScreen,
        navigationOptions: () => {
          headerTitle: 'Bahia Blanca'
        }
      },
      Quequen: {
        screen: CropScreen,
        navigationOptions: () => {
          headerTitle: 'Quequen'
        }
      },
      Cordoba: {
        screen: CropScreen,
        navigationOptions: () => {
          headerTitle: 'Cordoba'
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