import React from 'react';

import {dispatch} from 'ringa';
import {depend, dependency} from 'react-ringa';
import {ChuckNorrisAppModel} from './App';

export default class Form extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    depend(this, dependency(ChuckNorrisAppModel));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return <div ref="root">
        <label># of Jokes</label>
        <input ref="numberOfJokes" defaultValue={5} />
        <button onClick={() => this.loadJokes_onClickHandler() }>Load Jokes</button>
        <button onClick={() => this.clear_onClickHandler() }>Clear</button>
      </div>;
  }

  //-----------------------------------
  // Events
  //-----------------------------------
  loadJokes_onClickHandler() {
    dispatch('loadJokes', {
      numberOfJokes: this.refs.numberOfJokes.value
    }, this.refs.root);
  }

  clear_onClickHandler() {
    this.state.chuckNorrisAppModel.jokes = [];
  }
}
