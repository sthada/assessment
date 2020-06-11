import React from 'react';
export default class Radiobutton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (<div style={{ margin: '4px', marginTop: 0, display: "inline-block", position: "relative" }}>
            <h4 style={{ margin: 0, marginBottom: "4px" }}>{this.props.label}</h4>
            {this.props.input.map((itemObj, index) => {
                return <div id={index.toString()} style={{ position: "relative", display: "block", margin: "4px",  minWidth: "20px", height: "20px",maxWidth:'200px',width:'contect-width' }}>
                   {/* {itemObj.value} */}
                    <input type="radio" name={itemObj.name} value={itemObj.value} id={index.toString+itemObj.value} className='radio' 
                    // checked={itemObj.selected===true?true:false}isSelected
                    checked={itemObj.value===this.props.isSelected?true:false}
                    disabled={itemObj.disable?true:false} 
                    // style={{ width: 0, height: 0, opacity: 0 }}
                        onFocus={(event) => {
                            console.log('inside radio focus hahah');
                            this.props.onFocus(event);
                        }}
                        onBlur={(event) => {
                            console.log('inside radio blur;;;use specs');
                            this.props.onBlur(event);
                        }}
                        onChange={(event) => {
                            console.log('inside radio onchange;;;use specs'+itemObj.name);
                            this.props.onChangeRadio(event,itemObj.name);
                        }} 
                        // onclick={(event) => {
                        //     console.log('inside radio onclick;;;use specs'+itemObj.name);
                        //     this.props.onChangeRadio(event,itemObj.name);
                        // }} 
                        />
                    {itemObj.disable?<><span className="radio-check-frame-disable radio-checked"><label  className='radio-label-disable' for={index.toString+itemObj.value}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{itemObj.value}</label></span></>:
                    <span className="radio-check-frame radio-checked"><label onClick={(event) => {
                        console.log('inside radio onclick;;;use specs'+itemObj.name);
                        this.props.onChangeRadio(itemObj.value);
                    }} className='radio-label' for={index.toString+itemObj.value}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{itemObj.value}</label></span>}
                    
                </div>
            })
            }
            
        </div>)
    };
}