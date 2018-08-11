import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import App from './App';
import Artists from './components/Artists';

console.log(store);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter> 
            </Provider>
        )
    }
}