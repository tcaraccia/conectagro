/*
* ConectAgro CattleCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { PropTypes } from 'react'
import { Container, Content, Card, CardItem, Text, Left, Right,  Body,  } from 'native-base'
import { Image } from 'react-native'
import Moment from 'moment'

import CattleCardDetail from './CattleCardDetail'

export default function CattleCard({ date, count, dashboardEntries }) {
    _renderItem = ({ item }) => <CattleCardDetail {...item}/>
    
    return (
        <Card>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{Moment(date).format('dddd, MMYY')}</Text> //FIXME: Fix Moment Text Formating.
                    </Body>
                </Left>
                <CardItem>
                </CardItem>
                <Right>
                    <Body>
                        <Text>{count} Cabezas</Text>
                    </Body>
                </Right>
            </CardItem>
        </Card>
    )
}
