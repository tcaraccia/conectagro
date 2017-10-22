/*
* ConectAgro FeedScreen
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Spinner} from 'native-base'
import Error from '../components/Error'

import FeedCard from '../components/FeedCard'

import GET_NEWS_QUERY from '../graphql/queries/getNews'

class FeedScreen extends Component {

_renderItem = ({ item }) => <FeedCard {...item}/>


  render() {
    const { loading, feed, error } = this.props
    
    if(loading){
      return (
        <Container>
          <Content padder>
            <Spinner/>
          </Content>
        </Container>
      )
    }
    if(error) {
      return (
        <Container>
          <Content padder>
            <Error/>
          </Content>
        </Container>
      )
    }
    return (
      <Container>
          <Content padder>
            <FlatList
            contentContainerStyle={{ alignSelf: 'stretch' }}
            data={feed}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
        </Content>
      </Container>
    );
  }
}

export default compose(connect(), graphql(GET_NEWS_QUERY,{
  options: (props)=>({
    pollInterval: 60000
  }),
  props: ({ ownProps, data: { loading, error, allPosts } }) => ({
    loading: loading,
    feed: allPosts,
    error: error,
  })
}))(FeedScreen)