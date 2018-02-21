
import React, {Component} from 'react';
import LobbyCount from './LobbyCount.jsx'

class NavBar extends Component {
  render() {

    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <LobbyCount count={this.props.count} />
      </nav>
      )
  }
}

export default NavBar
