/*
* ConectAgro CattleCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View} from 'react-native'
import { Text, Title, Item, Card , CardItem, Separator} from 'native-base'
import Moment from 'moment'
import ComponentStyles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

/**
 * FIXME: The CardColumns Style seems to be trimming text and looks bad on android.
 * TODO: Check if styles in Android can be fixed.
 */

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
                <Card>
                    <CardItem style={ComponentStyles.cardHeader} header>
                        <Text>{Moment(date).format('dddd  D MMMM  YYYY')}</Text>
                        <Text>Entrada {count}</Text>
                    </CardItem>
                    <Separator style={{flex:5, flexDirection: 'row'}}bordered>
                        <Text style={{flex:2}}>Categoria</Text>
                        <Text style={{flex:1}}>Max</Text>
                        <Text style={{flex:1}}>Prom</Text>
                        <Text style={{flex:1}}>Cant</Text>
                    </Separator>
                    <CardItem>
                        <Text style={{flex:2}} >Novillo</Text>
                        <Text style={{flex:1}}>{nvlmax}</Text>
                        <Text style={{flex:1}}>{nvlavg}</Text>
                        <Text style={{flex:1}}>{nvlcount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Novillito</Text>
                        <Text style={{flex:1}}>{nvltmax}</Text>
                        <Text style={{flex:1}}>{nvltavg}</Text>
                        <Text style={{flex:1}}>{nvltcount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Vaquillona</Text>
                        <Text style={{flex:1}}>{vaqmax}</Text>
                        <Text style={{flex:1}}>{vaqavg}</Text>
                        <Text style={{flex:1}}>{vaqcount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Ternero</Text>
                        <Text style={{flex:1}}>{termax}</Text>
                        <Text style={{flex:1}}>{teravg}</Text>
                        <Text style={{flex:1}}>{tercount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Vaca</Text>
                        <Text style={{flex:1}}>{vacmax}</Text>
                        <Text style={{flex:1}}>{vacavg}</Text>
                        <Text style={{flex:1}}>{vaccount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Conserva</Text>
                        <Text style={{flex:1}}>{conmax}</Text>
                        <Text style={{flex:1}}>{conavg}</Text>
                        <Text style={{flex:1}}>{concount}</Text>
                    </CardItem>
                    <View style={ComponentStyles.rowSeparator}/>
                    <CardItem>
                        <Text style={{flex:2}}>Toro</Text>
                        <Text style={{flex:1}}>{tormax}</Text>
                        <Text style={{flex:1}}>{toravg}</Text>
                        <Text style={{flex:1}}>{torcount}</Text>
                    </CardItem>
                </Card>
        )

    }   
}
   