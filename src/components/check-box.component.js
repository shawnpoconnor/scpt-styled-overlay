import React, { Component } from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAchived: false };

    this. handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ isAchived: event.target.checked });
  }

  render() {
    return (
      <li style={{
        display: 'inline-block',
        width: '16.6%'
      }}>
      <div style={{ backgroundColor: this.props.bgColor }}
      >
      <form>
          <input
            type="checkbox"
            checked={this.state.isAchived}
            onChange={this.handleChange} />
      </form>
      </div>
      </li>
    )
  }

}
