import React from 'react';
import { Link } from 'react-router-dom';

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <p>top</p>
        <Link to='/sign_in'>ログイン</Link>
      </div>
    );
  }
}