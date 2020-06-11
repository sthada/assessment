import React from 'react';
import styled from 'styled-components';

const ContainerTextLink = styled.div`
    display:inline-block;
    font-size :${props => props.title};
    color:${props => props.visitedColor};
    padding:1px;
  `;

export default class Links extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        // this.closeNotifications = this.closeNotifications.bind(this);
    }
    // closeNotifications() {
    //     console.log('shut that dawwwg');

    //     this.setState({
    //         display: "none"
    //     })
    // }
    render() {
        return (
            <React.Fragment>
                <span className="tooltip">

                    <a href={this.props.href} target={this.props.target}
                        title={this.props.title}
                        onClick={this.props.onClickLink}>
                        {this.props.src ?
                            <img src={this.props.src} alt="HTML React lib image"
                                style={{ width: this.props.width, height: this.props.height, border: this.props.border }}></img> :
                            <ContainerTextLink>{this.props.children}</ContainerTextLink>}
                    </a>
                    <span className="tooltiptext">{this.props.title}</span>
                </span>
            </React.Fragment>)
    };
}