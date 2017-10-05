/*
* ConectAgro App Root
* author: tcaraccia
* https://github.com/tcaraccia/conectagro
*/

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { store, client } from './src/store'
import AppNavigation from './src/navigations'
import Moment from 'moment'
import esLocale from 'moment/locale/es'

export default class App extends React.Component {
  
  render() {
    Moment.updateLocale('es',esLocale) //No I18N so set we force the locale appwise for the time being.    
    return (
        <ApolloProvider store={store} client={client}>
          <AppNavigation />
        </ApolloProvider>
    );
  }
}