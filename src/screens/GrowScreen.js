/*
* ConectAgro GrowScreen
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Spinner } from 'native-base'

import GrowCard from '../components/GrowCard'
import GET_GROW_DASHBOARDS from '../graphql/queries/getGrowDashboards'

/**
 * TODO: Handle Errors 
 */

class GrowScreen extends Component {

_renderItem = ({ item }) => <GrowCard {...item}/>

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
        <FlatList
            contentContainerStyle={{ alignContent: 'stretch' }}
            data={dashboards}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
    );
  }
}

export default compose(connect(), graphql(GET_GROW_DASHBOARDS,{
  options: (props)=>({
    pollInterval: 20000
  }),
  props: ({ ownProps, data: { loading, error, allGrowDashboards } }) => ({
    loading: loading,
    dashboards: allGrowDashboards,
    error: error,
  })
}))(GrowScreen)
