/*
* ConectAgro CropCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Card, Divider } from 'react-native-elements'
import Moment from 'moment'
import ComponentStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default  class CropCard extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const {
            date,
            location,
            girasol,
            maiz,
            soja,
            sorgo,
            trigo,
            trigoart12
        } = this.props
                
        return (
                <Card containerStyle={ComponentStyles.card} dividerStyle={ComponentStyles.rowSeparator}>
                    <View style={ComponentStyles.cardHeader}>
                        <Text style={{fontSize:20}}>{Moment(date).format('dddd  D MMMM  YYYY')}</Text>
                    </View>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Girasol</Text>
                        <Text style={{flex:1}}>{girasol}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>maiz</Text>
                        <Text style={{flex:1}}>{maiz}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Soja</Text>
                        <Text style={{flex:1}}>{soja}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Sorgo</Text>
                        <Text style={{flex:1}}>{sorgo}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Trigo</Text>
                        <Text style={{flex:1}}>{trigo}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Trigo Art 12</Text>
                        <Text style={{flex:1}}>{trigoart12}</Text>
                    </View>
                </Card>
        )

    }   
}
   