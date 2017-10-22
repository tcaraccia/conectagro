/*
* ConectAgro ErrorCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { Component } from 'react'
import { View} from 'react-native'
import { Card, Divider, Text } from 'react-native-elements'
import Moment from 'moment'
import ComponentStyles from './styles'


export default  class Error extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
                <View style={ComponentStyles.error}>            
                        <Text style={ComponentStyles.errorText}>Ups...parece que algo no salio bien</Text>
                </View>
        )

    }   
}
   