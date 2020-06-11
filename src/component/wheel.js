import React, { Component } from 'react';

import loaderIcon from './assets/loader.gif';

class Wheel extends Component
{
  constructor(props){
    super(props);
    this.state={
        loaderEnable:false
    }

    this.spin = this.spin.bind(this);
  }

  spin(e){
    this.setState({
        loaderEnable:true
    });
   if( this.state.loaderEnable){
       
    e.target.classList.toggle('rotate');
    //    e.target.overlay.style.display = "none";
    
    // var panel = e.target.nextElementSibling;
    // if (panel.style.display === "block") {
    //     panel.style.display = "none";
    // } else {
    //     panel.style.display = "block";
    // }
    //   e.target.getElementsByClassName("overlay").style.display = "none";
    }else{
        
    e.target.classList.toggle('loader');
    }

  }
  render(){

    return (<div className='overlay'><div className='circle'><div className="loader"><img  src={loaderIcon} onClick={this.spin}/></div></div>
</div>);

  }
}
export default Wheel;