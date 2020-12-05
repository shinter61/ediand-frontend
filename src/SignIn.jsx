import React from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
  render() {
    return (
      <div>
        <p>sign_in</p>
        <Link to='/'>トップへ</Link>
      </div>
    );
  }
}
