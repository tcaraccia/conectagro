/*
* ConectAgro CattleScreen
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Spinner } from 'native-base'

import CattleCard from '../components/CattleCard'

import GET_DASHBOARDS from '../graphql/queries/getDashboards'

class CattleScreen extends Component {

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
      <Container>
        <Content>
            <FlatList
            data={dashboards}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
        </Content>
      </Container>
    );
  }
}

export default compose(connect(), graphql(GET_DASHBOARDS,{
  options: (props)=>({
    variables: {
      locationName: props.navigation.state.routeName
    }
  }),
  props: ({ ownProps, data: { loading, error, allDashboards } }) => ({
    loading: loading,
    dashboards: allDashboards,
    error: error,
  })
}))(CattleScreen)
