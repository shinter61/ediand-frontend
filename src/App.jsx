import React from 'react';
import Top from './Top';
import SignIn from './SignIn';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Top} />
        <Route exact path='/sign_in' component={SignIn} />
      </BrowserRouter>
    );
  }
}

export default App;
