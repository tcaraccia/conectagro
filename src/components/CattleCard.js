/*
* ConectAgro CattleCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Text, Left, Right,  Body,List, ListItem  } from 'native-base'
import { View } from 'react-native'
import Moment from 'moment'
import ComponentStyles from './styles'
import CattleCardDetail from './CattleCardDetail'
import Icon from 'react-native-vector-icons/FontAwesome'


export default  class CattleCard extends Component{
    _renderDiffIcon(diff){

           if(diff > 0 )
           {
                return <Icon size={20} color='green' name='angle-up'/>
           }
           
           if(diff < 0 )
           {
                return <Icon size={20} color='red' name='angle-down'/>
           }
            
    }
    render() {
        const { dashboardEntries, count, date } = this.props        
        return (
                <Card>
                    <CardItem header style={ComponentStyles.cardheader}>
                        <Left>
                            <Body>
                                <Text>{Moment(date).format('DD/MM/YYYY')}</Text> 
                            </Body>
                        </Left>
                        <Right>
                            <Body>
                                <Text>{count} Cabezas</Text>
                            </Body>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <List dataArray={dashboardEntries} renderRow={(dashboardEntry) =>
                            <ListItem style={ComponentStyles.dashboardEntry}>
                                <Text style={ComponentStyles.entryHalfRow}>{dashboardEntry.name}</Text>
                                <Text style={ComponentStyles.entryHalfRow}>$ {dashboardEntry.avgPrice}</Text>
                                {this._renderDiffIcon(dashboardEntry.priceDiff)}
                                <Text style={ComponentStyles.entryRow}>{Math.abs(dashboardEntry.priceDiff)}</Text>
                                <Text style={ComponentStyles.entryRow}>{dashboardEntry.quantity}</Text>
                            </ListItem>
                        }/>
                    </CardItem>
                </Card>
        )

    }   
}
   