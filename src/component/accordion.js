import React, { Component } from 'react';
class Accordion extends Component {
    render() {
        return (<>
<h2>{this.props.label}</h2>
            {this.props.data.map((it, index) => {
                return <div key={index}>

                    <button className="accordion" onClick={(e) => {
                        e.target.classList.toggle("active");
                        var panel = e.target.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                        } else {
                            panel.style.display = "block";
                        }
                    }}>{it.head}</button>
                    <div className="panel">
                        <p>{it.content}</p>
                    </div>
                </div>

            })}

        </>
        )
    }
}

export default Accordion;