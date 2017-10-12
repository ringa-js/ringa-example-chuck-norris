import React from 'react';

import {Model, Controller} from 'ringa';
import {attach} from 'react-ringa';

import Form from './Form';
import Jokes from './Jokes';

export const ChuckNorrisAppModel = Model.construct('ChuckNorrisAppModel', [
  {
    name: 'loading',
    default: false
  },
  'jokes'
]);

export const ChuckNorrisJoke = Model.construct('ChuckNorrisJoke', [
  'joke',
  'categories'
]);

class ChuckNorrisAppController extends Controller {
  constructor() {
    super();

    this.addModel(new ChuckNorrisAppModel());

    this.addListener('startLoading', chuckNorrisAppModel => {chuckNorrisAppModel.loading = true;});
    this.addListener('stopLoading', chuckNorrisAppModel => {chuckNorrisAppModel.loading = false;});

    this.addListener('loadJokes', [
      'startLoading',
      1000,
      this.loadJokes,
      'stopLoading'
    ]);
  }

  loadJokes(numberOfJokes, chuckNorrisAppModel) {

    fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`, { method: 'GET'})
      .then((res) => res.json())
      .then((body) => {

        chuckNorrisAppModel.loading = false;

        chuckNorrisAppModel.jokes = body.value.map(joke => {
          return Model.deserialize(joke, {
            model: ChuckNorrisJoke
          });
        });

      }); 
    
  }
}

export default class App extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    attach(this, new ChuckNorrisAppController());
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return <div>
      <Form />
      <Jokes />
    </div>;
  }
}
