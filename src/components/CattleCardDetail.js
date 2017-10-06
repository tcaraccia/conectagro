/*
* ConectAgro CattleCardDetail Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { PropTypes } from 'react'
import { Card, CardItem, Text, Left, Right,  Body,  } from 'native-base'
import { Image } from 'react-native'
import Moment from 'moment'

export default function CattleCard({ name, qty, avgprice, pricediff }) {
    return (
        <CardItem>
            <Text>{name} </Text>
        </CardItem>
    )
}
