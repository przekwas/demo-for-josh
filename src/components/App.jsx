import React, { Component } from 'react';
import { BracketGame, Bracket } from 'react-tournament-bracket';
import _ from 'lodash';
import * as JSOG from 'jsog';
import DATA from './DEMO';

const GAMES = JSOG.decode(DATA);
const ROOT = _.find(GAMES, { id: '35b0745d-ef13-4255-8c40-c9daa95e4cc4' });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <Bracket game={ROOT} homeOnTop={false} />
        );
    }

}

export default App;