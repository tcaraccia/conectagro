/*
* ConectAgro CattleScreen
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React, { Component } from 'react'
import { graphql, compose, withApollo } from 'react-apollo'
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'

import FeedCard from '../components/FeedCard'

import GET_NEWS_QUERY from '../graphql/queries/getNews'

class CattleScreen extends Component {

_renderItem = ({ item }) => <FeedCard {...item}/>

  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <Container>
          <Content padder>
            <FlatList
            contentContainerStyle={{ alignSelf: 'stretch' }}
            data={data.allPosts}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
            />
        </Content>
      </Container>
    );
  }
}

export default withApollo(
  compose(connect(undefined), graphql(GET_NEWS_QUERY))(
    CattleScreen,
  ),
)