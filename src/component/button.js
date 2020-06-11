import React, { Component } from 'react';
export default class Button extends Component {
    render() {
        return (
            <>
            {/* <div><button type="button">{this.props.label}</button></div> */}
            <input type="button" className={this.props.primary?'btn-primary':'btn-standard'}
                id={this.props.id} 
                value={this.props.label} 
                disabled={this.props.disabled?true:false}
                onClick={()=>{
                    this.props.onClick();
                    console.log('---------'+JSON.stringify(this.props.onClick))
            }}
                onHover={console.log(JSON.stringify(this.props))}/>
            </>
    )
    }
}
