/*
* ConectAgro MarketScreen
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Spinner } from 'native-base'

import Error from '../components/Error'

import MarketCard from '../components/MarketCard'
import GET_MARKET_DASHBOARDS from '../graphql/queries/getMarketDashboards'


class MarketScreen extends Component {

_renderItem = ({ item }) => <MarketCard {...item}/>

  render() {
    const { loading, error, dashboards } = this.props
    
    if(loading){
      return (
        <Container  style={{justifyContent:'center',alignContent:'center'}}>
          <Content>
            <Spinner/>
          </Content>
        </Container>
      )
    }
    if(error) {
      return (
        <Container style={{justifyContent:'center',alignContent:'center'}}>
          <Content>
            <Error/>
          </Content>
        </Container>
      )
    }

    return (
        <FlatList
            contentContainerStyle={{ alignSelf: 'stretch' }}
            data={dashboards}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
    );
  }
}

export default compose(connect(), graphql(GET_MARKET_DASHBOARDS,{
  options: (props)=>({
    variables: {
      locationName: props.navigation.state.routeName.toUpperCase()
    },
    pollInterval: 20000
  }),
  props: ({ ownProps, data: { loading, error, allMarketDashboards } }) => ({
    loading: loading,
    dashboards: allMarketDashboards,
    error: error,
  })
}))(MarketScreen)
