import React from 'react';
import logo from './logo.svg';
import Button from './component/button';
import TextField from './component/textField';
import TreeSelectable from './component/treeSelectable';
import Accordion from './component/accordion';
import Wheel from './component/wheel';
import Notifications from './component/notifications';
import Toggle from './component/toggle';
import Checkbox from './component/checkbox';
import Radiobutton from './component/radioButton';
import Modal from './component/modal';
import Links from './component/link';
import myTestEleLabel from './component/myTestEleLabel';

import imgAvatar from './component/maxresdefault.jpg';
import './App.css';
import { blockStatement } from '@babel/types';

function myFunCallback() {
  alert('Rock it bae');
}

  const mrele=<h2>
  11</h2>;
  const element = <h1>Hello, world</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anyVar: '765',
      errorBoolean: true,
      toggleBoolean: true,
      showModal: false,
      someVarValueRad:'3',
      radioInp:[{name:'1',value:'1',disable:false,selected:true},
      {name:'1',value:'2',disable:false,selected:true},
      {name:'1',value:'3',disable:false,selected:false},
      {name:'2',value:'4',disable:false,selected:false},
      {name:'1',value:'5',disable:true,selected:true},
      {name:'1',value:'6',disable:false,selected:false}
    ]
    }
    this.onChangeTextField = this.onChangeTextField.bind(this);
  }
  onChangeTextField(event) {
    console.log('my event avlue======' + this.state.anyVar);
    this.setState({ anyVar: event.target.value });
  }

  render() {
    return (<>Hell
              <myTestEleLabel>name='M ALi' num='3'</myTestEleLabel>
              <myTestEleLabel/>
              <mrele/> 
              <element/> 22
              ..</>
    
    )
  }
}

export default App;
