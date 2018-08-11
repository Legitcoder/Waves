import { createBrowserHistory } from 'history'
import {createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from '../reducers';

export const history = createBrowserHistory();

export const store = createStore(
    connectRouter(history)(reducers),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
)

