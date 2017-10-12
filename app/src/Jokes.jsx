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
    const {jokes = [], loading = false} = this.state;

    return <div>
      {loading && 'Loading...'}
      <div>
        {jokes.map((chuckNorrisJoke, idx) => (
          <div key={idx}>{chuckNorrisJoke.joke}</div>)
        )}
      </div>
    </div>;
  }
}
