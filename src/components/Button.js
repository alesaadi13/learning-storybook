import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked")
  }

  render() {
    return (
      <button type={this.props.type}
              value={this.props.value}
              className={this.props.className}
              disabled={this.props.disabled}
              formTarget={this.props.formTarget}
              onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}