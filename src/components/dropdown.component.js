import React, { Component } from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map((option) => <option>{option}</option>)}
          </select>
        </label>
      </form>
      </div>
    );
  }
}
