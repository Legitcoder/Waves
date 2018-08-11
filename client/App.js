import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Main from './components/Main';


class App extends Component {
    render() {
        return(
            <div className="container">
                <Main />
            </div>
        )
    }
}

export default App;