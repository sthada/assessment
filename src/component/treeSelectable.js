import React from 'react';

import addIcon from './assets/1814113 - add more plus.png';
import delIcon from './assets/1814090 - delete garbage t.png';
import subIcon from './assets/1814110 - close less minus.png';


const DummyNodes = [{
    "expanded": false, "name": "1",
    "fields": [
        {
            "expanded": false, "name": "11",
            "fields": [
                {
                    "expanded": false, "name": "111",
                    "fields": [{
                        "columnname": "rolename",
                        "datatype": "String",
                        "nullable": "true"
                    }, {
                        "columnname": "roleId",
                        "datatype": "String",
                        "nullable": "true"
                    }]
                }, {
                    "columnname": "rolename",
                    "datatype": "String",
                    "nullable": "true"
                }, {
                    "columnname": "roleId",
                    "datatype": "String",
                    "nullable": "true"
                }]
        }, {
            "columnname": "lasttname",
            "datatype": "String",
            "nullable": "true"
        }, {
            "columnname": "email",
            "datatype": "String",
            "nullable": "true"
        }]
},
{
    "expanded": false, "name": "2",
    "fields": [{
        "columnname": "firstname",
        "datatype": "String",
        "nullable": "true"
    }, {
        "columnname": "lasttname",
        "datatype": "String",
        "nullable": "true"
    }, {
        "columnname": "email",
        "datatype": "String",
        "nullable": "true"
    }]
},
{
    "expanded": false, "name": "3",
    "fields": [{
        "columnname": "projectName",
        "datatype": "String",
        "nullable": "true"
    }, {
        "columnname": "artifactId",
        "datatype": "String",
        "nullable": "true"
    }, {
        "columnname": "groupId",
        "datatype": "String",
        "nullable": "true"
    }]
}];
class TreeSelectable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

            // treeNodes: [...this.props.data],
            // treeNodes: [...DummyNodes],
            treeNodes: [],
            title: this.props.title,
            constTreeNodes: [...this.props.data],
            expandTreeNode: false,
        
        };
        this.processNode = this.processNode.bind(this);
        this.checkRecursive = this.checkRecursive.bind(this);
        this.shrinkNode = this.shrinkNode.bind(this);
        this.shrinkNodeComplete = this.shrinkNodeComplete.bind(this);
        this.expandCompleteTree = this.expandCompleteTree.bind(this);

    }
    componentDidMount() {
         }

    processNode(nodeName, nodesInp) {
        let modNodes = [...this.state.treeNodes];//having copy of the array Node
        let index = this.state.treeNodes.findIndex(x => x.name === nodeName);
        let tempArray=[];
        modNodes.forEach(item=>{
            if(item.name===nodeName){
                item.expanded=true
            }
        });
        nodesInp.forEach(childNodeObj=>{
            if(!childNodeObj.fields){
                let newObj={};
                newObj.name=childNodeObj.columnname;
                tempArray.push(newObj);
            }else{
               
            tempArray.push(childNodeObj);
            }
        });
        modNodes.splice(index + 1, 0, ...tempArray);

        this.setState({ treeNodes: modNodes });
        this.forceUpdate();
    }
    checkRecursive(arrayItem) {
        let temp = [];
        arrayItem.forEach(element => {
            if (element.hasOwnProperty('name')) {
            temp.push(<div key={element.name} className='isEntity'><span style={{ marginLeft: 20 }}></span>+{element.name}</div>);
            }
            if(element.hasOwnProperty('columnname'))
            {
                let objKeysArr = Object.keys(element).filter(item=>item!="columnname");
                temp.push(<div><span className='isColumn' style={{ marginLeft: 40 }}></span>->{element.columnname}</div>);
                
                objKeysArr.forEach(leafNode=>{
                    for (let [key, value] of Object.entries(element)) {
                        if(`${key}`==leafNode){
                        temp.push(<div><span className='isColumn' style={{ marginLeft: 60 }}></span>- <span style={{ fontSize: 12 , color:'#0066b3',fontStyle:'italic', margin:4 }}>{`${key}:`}</span>{`${value}`}</div>);
                    }
                      }
                    // let leafNodeMod=''+leafNode+'('+"11111"+JSON.stringify(element.leafNode)+')';
                    // console.log("leafNodeMod"+leafNodeMod);
                    // temp.push(<div><span className='isColumn' style={{ marginLeft: 80 }}></span>-{leafNode }( {element.leafNode} )</div>);
                })
            }
            if (element.hasOwnProperty('fields')) {
                temp=[temp,...this.checkRecursive(element.fields)];
            }
            // else{
                // let objKeysArr = Object.keys(element).filter(item=>item!="columnname");
                // temp.push(<div><span style={{ marginLeft: 40 }}></span>->{element.columnname}</div>);
                
                // objKeysArr.forEach(leafNode=>{
                //     temp.push(<div><span style={{ marginLeft: 80 }}></span>-{leafNode}</div>);
                // })

            // }
            
        });
        return temp.filter(item=>{
            return <span  className='isColumn' style={{ marginLeft: 20 }}>{item}</span>
        });
    }

    expandCompleteTree(){
        // console.log("expandCompleteTree");
        // let expandedTree=[...this.props.data];
        let htmlTree=[];
        this.props.data.forEach(node=>{
        // console.log("for node"+JSON.stringify(node));
        htmlTree.push(<div className='isEntity'>+<span style={{ marginLeft: 0 }}></span>{node.name}</div>);
            if(node.hasOwnProperty('fields')){
                htmlTree=[htmlTree,...this.checkRecursive(node.fields)];
            }else{
                //identify keys of node and then add them in array
                let objKeysArr = Object.keys(node).filter(item=>item!="columnname");
                // console.log('having leaf node'+objKeysArr)
                htmlTree.push(<div  className='isColumn'><span style={{ marginLeft: 40 }}></span>->{node.columnname}</div>);
                
                objKeysArr.forEach(leafNode=>{
                    htmlTree.push(<div  className='isColumn'><span style={{ marginLeft: 80 }}></span>-{leafNode}</div>);
                })
            }
        });
        this.setState({ treeNodes: [...htmlTree] });
        this.forceUpdate();
    }

    shrinkNode(nodeName) {
        //console.log(this.state.treeNodes);
        let tempTree=[...this.state.treeNodes]
        tempTree=[...tempTree.filter(node=>{
            if(node.name!=nodeName){
                node.expanded=false;
            return node;}
        })];
        this.setState({ treeNodes: [...tempTree] });
        this.forceUpdate();
    }
    shrinkNodeComplete() {
        this.setState({ treeNodes: [...this.props.data] });
        this.forceUpdate();
    }

    render() {

        return (
            this.props.data === null ? <h3 className='tree-root'>Tree is Empty</h3> : <div className='tree-container'> <><img className='tree-expand-icons' src={subIcon} alt="shrink" onClick={() => { this.shrinkNodeComplete() }} />
                <img className='tree-expand-icons' src={addIcon} alt="expand" onClick={() => { this.expandCompleteTree() }} />
                <h3 className='tree-root'>{this.props.title}</h3></>
                {this.state.treeNodes.map((item, index) => {
                    return <div key={index} className='isEntity'>{item}</div>
                    // console.log(item);
                    // return <div key={index} className='tree-container'>{item}
                    //     {item.fields ? <span>
                    //         {item.expanded ? <img className='tree-expand-icons' src={subIcon} alt="shrink"
                    //             onClick={() => {
                    //                 this.shrinkNode(item.name);
                    //                 this.forceUpdate();
                    //             }} /> :  <>
                    //             {!item.expanded &&<span style={{ marginLeft: 40 }}></span>}
                    //             </>}
                    //             </span> : <span style={{ marginLeft: 40 }}
                    //             >->&nbsp;&nbsp;&nbsp;</span>}
                    //     {item.name}
                    // </div>
                })}
            </div>
        );
    }
}


export default TreeSelectable;
