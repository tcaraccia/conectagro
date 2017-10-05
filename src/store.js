/*
* ConectAgro App Root
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const URI = 'https://api.graph.cool/simple/v1/cj70pah1b05pw0198udsrtph8'
const networkInterface = createNetworkInterface({
  uri: URI,
});




export const client = new ApolloClient({
  networkInterface: networkInterface
});

const middlewares = [client.middleware(), thunk, createLogger()];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);