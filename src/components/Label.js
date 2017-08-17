import React from 'react'

export default class Label extends React.Component {
    render() {
        return (
            <label
                className={this.props.className}
                style={this.props.style}
                htmlFor={this.props.for}
                hidden={this.props.hidden}
                form={this.props.form}
            >
                {
                    this.props.text
                }
            </label>
        )
    }
}
