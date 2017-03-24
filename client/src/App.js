import React, { Component } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import './App.css'
import ChannelsListWithData from './components/ChannelsListWithData'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
   networkInterface: networkInterface,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">React + GraphQL Tutorial</div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
