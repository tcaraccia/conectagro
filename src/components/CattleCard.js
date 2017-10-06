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
                        <Text>{Moment(date).format('LL')}</Text>
                        <Text note>{date}</Text>
                    </Body>
                </Left>
                <CardItem>
                    <Body>
                        <FlatList
                        contentContainerStyle={{ alignSelf: 'stretch' }}
                        data={dashboardEntries}
                        keyExtractor={item => item.id}
                        renderItem={this._renderItem}
                        />
                    </Body>
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
