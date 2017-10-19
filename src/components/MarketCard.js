/*
* ConectAgro MarketCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View} from 'react-native'
import { Card, Divider, Text } from 'react-native-elements'
import Moment from 'moment'
import ComponentStyles from './styles'

/**
 * FIXME: The CardColumns Style seems to be trimming text and looks bad on android.
 * TODO: Check if styles in Android can be fixed.
 */

export default  class MarketCard extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const {
            count,
            date,
            nvlavg,
            nvlmax,
            nvlcount,
            nvltavg,
            nvltcount,
            nvltmax,
            vaqavg,
            vaqcount,
            vaqmax,
            teravg,
            tercount,
            termax,
            vacavg,
            vaccount,
            vacmax,
            conavg,
            concount,
            conmax,
            toravg,
            torcount,
            tormax,
        } = this.props        
        return (
                <Card containerStyle={ComponentStyles.card} dividerStyle={ComponentStyles.rowSeparator}>            
                    <View style={ComponentStyles.cardHeader}>
                        <Text style={{fontSize:20}}>{Moment(date).format('dddd  D MMMM  YYYY')}</Text>
                        <Text style={{fontSize:15}}>Entrada {count} Cabezas</Text>
                    </View>
                    <View style={ComponentStyles.cardColumnsHeader}>
                        <Text style={{fontSize:12,flex:2}}>Categoria</Text>
                        <Text style={{fontSize:12,flex:1}}>Max</Text>
                        <Text style={{fontSize:12,flex:1}}>Prom</Text>
                        <Text style={{fontSize:12,flex:1}}>Cant</Text>
                    </View>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}} >Novillo</Text>
                        <Text style={{flex:1}}>{nvlmax}</Text>
                        <Text style={{flex:1}}>{nvlavg}</Text>
                        <Text style={{flex:1}}>{nvlcount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Novillito</Text>
                        <Text style={{flex:1}}>{nvltmax}</Text>
                        <Text style={{flex:1}}>{nvltavg}</Text>
                        <Text style={{flex:1}}>{nvltcount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Vaquillona</Text>
                        <Text style={{flex:1}}>{vaqmax}</Text>
                        <Text style={{flex:1}}>{vaqavg}</Text>
                        <Text style={{flex:1}}>{vaqcount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Ternero</Text>
                        <Text style={{flex:1}}>{termax}</Text>
                        <Text style={{flex:1}}>{teravg}</Text>
                        <Text style={{flex:1}}>{tercount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Vaca</Text>
                        <Text style={{flex:1}}>{vacmax}</Text>
                        <Text style={{flex:1}}>{vacavg}</Text>
                        <Text style={{flex:1}}>{vaccount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Conserva</Text>
                        <Text style={{flex:1}}>{conmax}</Text>
                        <Text style={{flex:1}}>{conavg}</Text>
                        <Text style={{flex:1}}>{concount}</Text>
                    </View>
                    <Divider/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Toro</Text>
                        <Text style={{flex:1}}>{tormax}</Text>
                        <Text style={{flex:1}}>{toravg}</Text>
                        <Text style={{flex:1}}>{torcount}</Text>
                    </View>
                </Card>
        )

    }   
}
   