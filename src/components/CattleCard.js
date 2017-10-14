/*
* ConectAgro CattleCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View} from 'react-native'
import { Text, Title, Item } from 'native-base'
import Moment from 'moment'
import ComponentStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'


export default  class CattleCard extends Component{
    constructor(props){
        super(props)
    }
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
                <View style={ComponentStyles.card}>
                    <Item style={ComponentStyles.cardHeader} regular header>
                        <Title>{Moment(date).format('dddd  D MMMM  YYYY')}</Title>
                        <Title>Entrada {count}</Title>
                    </Item>
                    <Item style={ComponentStyles.cardColumns} regular>
                        <Text style={{flex:2}}>Categoria</Text>
                        <Text style={{flex:1}}>Max</Text>
                        <Text style={{flex:1}}>Prom</Text>
                        <Text style={{flex:1}}>Cant</Text>
                    </Item>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}} >Novillo</Text>
                        <Text style={{flex:1}}>{nvlmax}</Text>
                        <Text style={{flex:1}}>{nvlavg}</Text>
                        <Text style={{flex:1}}>{nvlcount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Novillito</Text>
                        <Text style={{flex:1}}>{nvltmax}</Text>
                        <Text style={{flex:1}}>{nvltavg}</Text>
                        <Text style={{flex:1}}>{nvltcount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Vaquillona</Text>
                        <Text style={{flex:1}}>{vaqmax}</Text>
                        <Text style={{flex:1}}>{vaqavg}</Text>
                        <Text style={{flex:1}}>{vaqcount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Ternero</Text>
                        <Text style={{flex:1}}>{termax}</Text>
                        <Text style={{flex:1}}>{teravg}</Text>
                        <Text style={{flex:1}}>{tercount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Vaca</Text>
                        <Text style={{flex:1}}>{vacmax}</Text>
                        <Text style={{flex:1}}>{vacavg}</Text>
                        <Text style={{flex:1}}>{vaccount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Conserva</Text>
                        <Text style={{flex:1}}>{conmax}</Text>
                        <Text style={{flex:1}}>{conavg}</Text>
                        <Text style={{flex:1}}>{concount}</Text>
                    </View>
                    <View style={ComponentStyles.cardSeparator}/>
                    <View style={ComponentStyles.cardContent}>
                        <Text style={{flex:2}}>Toro</Text>
                        <Text style={{flex:1}}>{tormax}</Text>
                        <Text style={{flex:1}}>{toravg}</Text>
                        <Text style={{flex:1}}>{torcount}</Text>
                    </View>
                </View>
        )

    }   
}
   