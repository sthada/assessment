import React, { Component } from 'react';
import './assets/header.css';
import companyLogo from './assets/eJade-logo1.png';
import logoutIcon from './assets/logout_icon.png';
import userAccount from './assets/user.png';
import Navbar from '../Navbar/navbar';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import Auth from '../../Auth';
import { withRouter } from "react-router-dom";
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';

initializeIcons();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUserStatus: Auth.isAuthenticated(),
      items: [
        { text: 'Home', key: 'f0', onClick: this._onBreadcrumbItemClicked, isCurrentItem: false },
        { text: 'Generate Project', key: 'f1', onClick: this._onBreadcrumbItemClicked, isCurrentItem: false },
        // { text: 'Select Tables & Generate Code', key: 'f2', onClick: this._onBreadcrumbItemClicked, isCurrentItem: false },
        // { text: 'Download project Repositort', key: 'f3', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true } 
      ]
    }
    this.logMeOut = this.logMeOut.bind(this);
    this._onBreadcrumbItemClicked = this._onBreadcrumbItemClicked.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  _onBreadcrumbItemClicked(myEv, item) {
    // this.props.history.push('/app');
    // this.handleBreadCrumbNav(item);
    // myEv(this.handleBreadCrumbNav(item));
    // this.setState({
    //   currentBreadCurmPage: item.key,      
    //   createProjTempFlag: false
    // })
    // this.props.history.push('/create-proj');
  };
  changePassword() {
    {/* <Redirect  to={{
      pathname :'/',
      state:{
        from : props.location}
    }}/> */}
    this.props.history.push("/");

  }
  logMeOut() {
    Auth.logout();
    window.location.reload();
    this.props.history.push("/");

  }
  render() {
    return (
      <div className="header-jade">
        <div className="logo"> <img src={companyLogo} alt="Logo" onClick={() => {
          this.props.history.push('/app')
        }} /></div>
        <div className="header-right">
          <div className="header-user-details">
            {/* {Auth.isAuthenticated() ? <span>Welcome {Auth.getUserName()}</span> :  */}
            {/* <span></span>} */}
          </div>
          {Auth.isAuthenticated() &&
            <div className="dropdown-user">
              <img className='userIcon' src={userAccount} alt="profile" />
              <div className="dropdown-content-user">
                <a href="#" onClick={this.logMeOut} >Logout</a>
                <a href="#" onClick={this.changePassword}>Change Password</a>
                {/*<a href="#" onClick={() => { this.props.history.push('/create-proj') }}>create-proj</a>
                  <a href="#" onClick={() => { this.props.history.push('/tableSelect') }}>Table Select</a> 
                <a href="#" onClick={() => { this.props.history.push('/users2') }}>2</a>
                <a href="#" onClick={() => { this.props.history.push('/users3') }}>3</a>*/}
                </div></div>}
            
            </div>
            {/* <div className='add-space'>12</div> */}
              {/* {Auth.isAuthenticated() && <div>

                <p className='hide-me'>.</p>
                <div className='track-bar'>
                <Breadcrumb className='bre-pos'
                  items={this.state.items}
                  maxDisplayedItems={4}
                  ariaLabel={'Breadcrumb with static width'}
                  overflowAriaLabel={'More items'}
                /></div>
              </div>} */}
      </div>
    
        );
      }
    }
    
    export default withRouter(Header);
