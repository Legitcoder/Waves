import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Artists from './Artists';


class Main extends Component {
    render() {
        return(
        <div className="main">
            <Switch> 
                <Route exact path="/" component={Artists} exact />
                <Route exact path="/artists" component={Artists} />
            </Switch>
        </div>
        );
    }
}

export default Main;