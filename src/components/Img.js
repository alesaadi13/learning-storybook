import React from 'react'

export default class Img extends React.Component {
    constructor(props) {
        super(props)
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDrag(ev) {
        ev.dataTransfer.setData("data", ev.target.id);
    }

    render() {
        return (
            <img id={this.props.id}
                 className={this.props.className}
                 src={this.props.src}
                 alt={this.props.alt}
                 width={this.props.width}
                 height={this.props.height}
                 title={this.props.title}
                 draggable={this.props.draggable} onDragStart={this.handleDrag}/>
        )
    }
}
