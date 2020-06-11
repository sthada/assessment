import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    display:${props => props.display}
    background-color:${props => {
        switch (props.status) {
            case "ok":
                return "green";
                break;
            case "error":
                return "red";
                break;
            case "warning":
                return "orange";
                break;
            default:
                return "#444";
                break;
        }
    }};
   
    color:white;
    padding:16px;
    // top: ${props => props.top}px;
    top:0;
    left:0;
    margin-top:60px;
    z-index:1000;
    width:100%;
    transition: top 0.5s ease;
  `;
const Close = styled.div`
      position: absolute;
      display:block
      font-size:22px;
      font-weight:600;
      color:white;
      top:8px;
      right:10px;
    `;

export default class Notification extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: -100,
            status: this.props.status,
            display: "none"
        }
        this.timeout = null
        this.showNotification = this.showNotification.bind(this);
        this.closeNotifications = this.closeNotifications.bind(this);
    }
    showNotification() {
        console.log('maara re');
        this.setState({
            // top: 16,
            display: "block"
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    // top: -100,
                    display: "none"
                })
            }, 5000);
        })
    }
    closeNotifications() {
        console.log('shut that dawwwg');

        this.setState({
            display: "none"
        })
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.showNotification}>Notify Me</button>
                {/* <Container top={this.state.top} display={this.state.display} status={this.state.status}> */}
                <Container display={this.state.display} status={this.state.status}>
                    Witness ME!!!!!
                <Close><div onClick={this.closeNotifications}>x</div></Close>
                </Container>
            </React.Fragment>)
    };
}