import React, { Component } from 'react';
import '../Navbar/assets/navbar.css'
import homeLogo from './assets/home-icon.png';
import appIcon from './assets/app-icon.png';
import softwareIcon from './assets/software-icon.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.redirectToHome = this.redirectToHome.bind(this);
  }
  redirectToHome() {
    this.props.history.push('/app');
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-home"><img src={homeLogo} alt="home" onClick={this.redirectToHome} /></div>
        <div className="menu-dropdown">
          <div className="drop-button">Entities <span className="arrow-down"></span> </div>
          <div className="dropdown-content">
            <div className="dropdown-submenu" >
              <a href=""><img src={appIcon} alt="App" width="24" height="21" /><span>Feedback Search</span></a>
              <a href=""><img src={softwareIcon} alt="software" width="24" height="21" /><span>Feedback Create</span></a>
              <a href=""><img src={appIcon} alt="App" width="24" height="21" /><span>Project Search</span></a>
              <a href=""><img src={softwareIcon} alt="software" width="24" height="21" /><span>Project Create</span></a>
              <a href=""><img src={appIcon} alt="App" width="24" height="21" /><span>Tables Search</span></a>
              <a href=""><img src={softwareIcon} alt="software" width="24" height="21" /><span>Tables Create</span></a>
              <a href=""><img src={appIcon} alt="App" width="24" height="21" /><span>User Search</span></a>
              <a href=""><img src={softwareIcon} alt="software" width="24" height="21" /><span>User Create</span></a>
            </div>
          </div>
        </div>
        <div className="menu-dropdown">
          <div className="drop-button">Swagger <span className="arrow-down"></span> </div>
        </div>
      </div>

    );
  }
}

export default Navbar;
