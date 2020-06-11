import React, {Component} from 'react';
import './assets/footer.css';
import logo from './assets/hcl-logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text">&copy; All Rights Reserved by HCL Products and Platform        
        <div className="footer-logo"><img src={logo} alt="hcl logo"/></div>
        </div>
      </div>
    );
  }
}

export default Footer;
