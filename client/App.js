import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Main from './components/Main';
import SideNavigation from './components/SideNavigation';
import MusicPlayer from './components/MusicPlayer';


class App extends Component {
    render() {
        return(
            <div className="container">
                <SideNavigation />
                <Main />
                <MusicPlayer />
            </div>
        )
    }
}

export default App;