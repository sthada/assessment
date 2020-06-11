import React, { Component } from 'react';

import closeIcon from './assets/1814078 - close no reject.svg';
import magnifyIcon from './assets/1814075 - find magnifier m.svg';
import attentionIcon from './assets/1814088 - attention exclam.svg';
import peekIcon from './assets/1814102 - eye sight view.svg';
import questionIcon from './assets/1814114 - help question.svg';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          passwordPeeking: false
        }
    }
    render() {
        return (<div className='my-text-field-layout'>
            {/* {(this.props.value || this.props.value.length > 0) ? <div className='text-field-label-top'>{this.props.label}
                <img className='textfield-icons-compact1' src={questionIcon} alt="add" onClick={() => {
                    console.log('Icon clicked for infotop');
                }} />
            </div> :
                <div className='text-field-label'>{this.props.label}
                    <img className='textfield-icons-compact1' src={questionIcon} alt="add" onClick={() => {
                        console.log('Icon clicked for infodown');
                    }} />
                </div>
            } */}
            <div className='text-field-label-top'>{this.props.label}

                {/* <img className='textfield-icons-compact1' src={questionIcon} alt="add" onClick={() => {
                    console.log('Icon clicked for info');
                }} /> */}
            </div>
            <input type={(this.props.password && !this.state.passwordPeeking )? "password" : this.props.type}
                className='text-field' 
                id={this.props.id}
                value={this.props.value}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled ? true : false}
                label={this.props.label}
                onChange={(event) => {
                    this.props.onChange(event);
                }}
                onFocus={() => {

                }}
                onBlur={() => {
                    // if (this.props.value || this.props.value.length > 0) {

                    // }
                }}
                onHover={console.log(JSON.stringify(this.props))} />
            {this.props.value.length>0 &&
            <img className='textfield-icons-compact' src={closeIcon} alt="add" onClick={() => {
                console.log('Icon clicked for close');
                this.props.onClickCancel();
            }} />}
            {this.props.password &&
            <img className='textfield-icons-eye' src={peekIcon} alt="add" onClick={() => {
                console.log('Icon clicked for password');
                this.setState({
                    passwordPeeking:!this.state.passwordPeeking
                });
            }} 
            
            readOnly={this.props.readOnly} 
            pattern={this.props.pattern}
            maxlength={this.props.maxlength} 
            minlength={this.props.minlength} 
            step={this.props.step}
            />}

            <span className="tooltip">i
				<span className="tooltiptext">Tooltip says-It is informative text</span>
            </span>
            {this.props.error && this.props.showError && <div className='error'>
                {/* <img className='textfield-icons-alert' src={attentionIcon} alt="add" onClick={() => {
                    console.log('Icon clicked for close');
                }} /> */}
                {this.props.error}</div>}

        </div>
        )
    }
}

export default TextField;