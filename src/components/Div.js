import React from 'react'

export default class Div extends React.Component {
    constructor(props) {
        super(props)
        this.handleAllowDrop = this.handleAllowDrop.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleAllowDrop(ev) {
        ev.preventDefault();
    }

    handleDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("data");
        ev.target.appendChild(document.getElementById(data));
    }

    render() {
        return (
            <div id="div1" className={this.props.className} onDrop={this.handleDrop} onDragOver={this.handleAllowDrop}>
                {this.props.children}
            </div>
        )
    }
}
