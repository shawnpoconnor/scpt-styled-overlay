import React, { Component } from 'react';
import {VpAssignment} from './vp-assignment.component'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.undrawn[0],
      undrawn: this.props.undrawn,
      drawn: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      drawn:   this.state.drawn.concat([this.state.value]),
      undrawn: this.state.undrawn.filter(x=>x!=this.state.value),
      value:   this.state.undrawn[1]
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.undrawn.map((option) => <option key={option}>{option}</option>)}
          </select>
          <input type="submit" value="Submit" />
        </label>
      </form>
      <ul>
        {this.state.drawn.map((card) => <li><VpAssignment key={card} card={card}/></li>)}
      </ul>
      </div>
    );
  }
}
