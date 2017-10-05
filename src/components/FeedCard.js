/*
* ConectAgro FeedCard Component
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/
import React, { PropTypes } from 'react'
import { Container, Content, Card, CardItem, Text, Left, Body, Thumbnail } from 'native-base'
import { Image } from 'react-native'
import Moment from 'moment'

export default function FeedCard({ body, title, createdBy, createdAt }) {
    return (
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:'http://3.bp.blogspot.com/_Xjvl6cDsUqc/S7xmmYEbjpI/AAAAAAAAATY/q5Wqs3XHMpY/s1600/ESCUDO+CYM.JPG' }}/>
                <Body>
                  <Text>{title}</Text>
                  <Text note>{createdBy}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
                <Image source={{uri:'http://lamanga.com.ar/new/wp-content/uploads/2017/05/colombo-y-magliano-televisado-3-arroyos.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
                <Text style={{justifyContent: 'center', paddingHorizontal: 10}}>{body}</Text>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Text note >{Moment(createdAt).fromNow()}</Text>
            </CardItem>
          </Card>
    )
}
