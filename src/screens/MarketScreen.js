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

import CattleCard from '../components/CattleCard'
import GET_MARKET_DASHBOARDS from '../graphql/queries/getMarketDashboards'

class MarketScreen extends Component {

_renderItem = ({ item }) => <CattleCard {...item}/>

  render() {
    const { loading, error, dashboards } = this.props
    
      if(loading){
        return (
          <Container>
            <Content padder>
              <Spinner/>
            </Content>
          </Container>
        )
      }
    return (
      <View>
        <FlatList
            contentContainerStyle={{ alignSelf: 'stretch' }}
            data={dashboards}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
      </View>
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
