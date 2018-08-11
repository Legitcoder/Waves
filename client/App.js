import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Artists from './components/Artists';


class App extends Component {
    render() {
        return(
            <div className="container">
                <Switch> 
                    <Route exact path="/" component={Artists} exact />
                    <Route exact path="/artists" component={Artists} exact />
                </Switch>
            </div>
        )
    }
}

export default App;