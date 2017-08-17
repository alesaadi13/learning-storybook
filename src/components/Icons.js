import React from 'react'

export default class Div extends React.Component {

    render() {
        return (
            <div id="div1" className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}
