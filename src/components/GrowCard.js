/*
* ConectAgro GrowCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Card, Divider } from 'react-native-elements'
import Moment from 'moment'
import ComponentStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default  class GrowCard extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const {
            date,
            location,
            seller,
            tero0,
            tero160,
            tero180,
            tero200,
            nov230,
            nov260,
            nov300,
            tera0,
            tera150,
            tera190,
            vaq210,
            vaq250,
            vaqpren,
            vacnuepren,
            vacusdpren,
            vacnuecri,
            vacusdcri,
        } = this.props
                
        return (
                <Card containerStyle={ComponentStyles.card} dividerStyle={ComponentStyles.rowSeparator}>
                    <View style={ComponentStyles.cardHeader}>
                        <Text style={{fontSize:20}}>{Moment(date).format('dddd  D MMMM  YYYY')}</Text>
                        <Text style={{fontSize:15}}>{location}</Text>
                    </View>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneros 160 Kgs</Text>
                        <Text style={{flex:1}}>{tero0}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneros 160/180 Kgs</Text>
                        <Text style={{flex:1}}>{tero160}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneros 180/200 Kgs</Text>
                        <Text style={{flex:1}}>{tero180}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneros 200/230 Kgs</Text>
                        <Text style={{flex:1}}>{tero200}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Novillitos 230/260 Kgs</Text>
                        <Text style={{flex:1}}>{nov230}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Novillitos 260/300 Kgs</Text>
                        <Text style={{flex:1}}>{nov260}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Novillitos + 300Kgs</Text>
                        <Text style={{flex:1}}>{nov300}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneras hasta 150 Kgs</Text>
                        <Text style={{flex:1}}>{tera0}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneras 150/190 Kgs</Text>
                        <Text style={{flex:1}}>{tera150}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Terneras 190/210 Kgs</Text>
                        <Text style={{flex:1}}>{tera190}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Vaquillonas 250/300 Kgs</Text>
                        <Text style={{flex:1}}>{vaq250}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:4}}>Vaquillonas C/Gtia Preñez</Text>
                        <Text style={{flex:1}}>{vaqpren}</Text>
                    </View>
                </Card>
        )

    }   
}
   