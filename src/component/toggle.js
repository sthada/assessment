import React from 'react';
export default class Toggle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
       
        }
        this.closeNotifications = this.closeNotifications.bind(this);
    }
 
    closeNotifications() {
        console.log('shut that dawwwg');

        this.setState({
            display: "none"
        })
    }
    render() {
        return (<div  style={{margin:'4px', marginTop:0,  display:"inline-block",position:"relative"}}><h4 style={{margin:0, marginBottom:"4px"}}>{this.props.label}</h4>
            <label className="switch">
              <input type="checkbox" checked={this.props.value}
                onChange={(event) => {
                    console.log('inside toggle');
                    this.props.onChange(event);
                }}
                onFocus={(event) => {
                    console.log('inside toggle focus hahah');
                    this.props.onFocus(event);
                }}
                onBlur={(event) => {
                    console.log('inside toggle blur;;;use specs');
                    this.props.onBlur(event);
                }}/>
                <span className="slider round"></span>
            </label>&nbsp;&nbsp;{this.props.value===true ?this.props.onText:this.props.offText}
            </div>)
    };
}