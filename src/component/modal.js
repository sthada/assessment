import React from 'react';
import styled from 'styled-components';

import Button from './button';

const ModalO = styled.div`

    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 96%;
    width: fit-content;
    height: fit-content;
    min-width: 420px;
    min-height: 380px;
    max-height: 94%;
    margin: auto;
    padding: 20px;
    padding-top:48px;
    padding-bottom:60px;
    box-shadow: 0px 0px 10px 0px steelblue;
    background-color: #eee;
    color: blue;
    transition: top 0.5s ease;
    z-index:1000;
    border-radius:10px;
  `;
  const Container = styled.div`
  
      display: block;
      position: relative;
      margin: 20 auto;
      clear:both;
      border-radius:8px;
      box-shadow: 0px 0px 2px 0px #ddd;
    max-width: 100%;
    width: fit-content;
    height: auto;
    min-width: 380px;
    min-height: 260px;
    max-height: 100%;
      overflow-y:auto;
      background-color: #fff;
      color: blue;
      ::-webkit-scrollbar { 
          display: none; 
      };
      { overflow: -moz-scrollbars-none; };
      { -ms-overflow-style: none; };
    `;
const Close = styled.div`
      position: absolute;
      display:block;
      font-size:22px;
      font-weight:600;
      color:steelblue;
      top:8px;
      right:10px;
    `;
const ModalHeading = styled.div`
    
    position: absolute;
    display:block;
    font-size:22px;
    font-weight:600;
    color:steelblue;
    margin:8px;
    top:8px;
    left:14px;
    `;

export default class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: this.props.show,
            prevChildren: this.props.children
        }
        this.timeout = null
        this.onModalTimeOut = this.onModalTimeOut.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
    }
    onModalTimeOut() {
        this.setState({
            display: "block"
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    display: "none"
                })
            }, this.props.timeOutWindow?this.props.timeOutWindow:1000);
        })
    }
    cancelChanges() {
        console.log('shut that dawwwg and cancel changes made');
    }

    render() {
        return (this.props.show && <React.Fragment><div className='overlay'>
            <ModalO onTimeOut={()=>this.props.onModalTimeOut}>
                <ModalHeading>{this.props.heading}</ModalHeading>
                <Container>
                {this.props.children}
                </Container>
                <div className='button-align'>
                    <Button label='CANCEL' value='print' onClick={() => {this.props.closeModal();  this.cancelChanges(); console.log(this.props.children)}} />
                    <Button label='SAVE' value='print' primary onClick={this.props.onClickSaveModal} />
                </div>

                <Close><div onClick={this.props.closeModal}>x</div></Close>
            </ModalO>
        </div>

        </React.Fragment>)
    };
}