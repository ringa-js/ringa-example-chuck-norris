import React from 'react';

import {ChuckNorrisAppModel} from './App';
import {depend, dependency} from 'react-ringa';

export default class Jokes extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    depend(this, dependency(ChuckNorrisAppModel, ['jokes', 'loading']));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const {jokes, loading} = this.state;

    return <div>
      {loading ? 'Loading...' : undefined}
      <div>{jokes ? jokes.map(chuckNorrisJoke => <div key={chuckNorrisJoke.id}>{chuckNorrisJoke.joke}</div>) : undefined}</div>
    </div>;
  }
}
