import React from 'react'
import PropTypes from 'prop-types';
export default class Liknk extends React.Component {
    render() {
        return (
            <a
                href={this.props.href}
                className={this.props.className}
                style={this.props.style}
            >
                {this.props.text}
            </a>
        )
    }
}

