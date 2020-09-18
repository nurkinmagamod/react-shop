import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component';

import './App.scss';

const HatsPage = props => {
  console.log(props);
  return(
  <div>
    <h1>HatsTitile {props.match.params.hatsId}</h1>
  </div>
  )
  }

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats/:hatsId' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
