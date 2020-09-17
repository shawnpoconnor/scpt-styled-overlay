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
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      drawn:   this.state.drawn.concat([this.state.value]),
      undrawn: this.state.undrawn.filter(card=> card != this.state.value),
      value:   this.state.undrawn[1]
    })
  }

  handleRemove(event) {
    event.preventDefault();
    this.setState({
      undrawn:   this.state.undrawn.concat([this.state.value]),
      drawn: this.state.drawn.filter(card=> card != event.target.value),
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.undrawn.map((option) => <option>{option}</option>)}
          </select>
          <input type="submit" value="Submit" />
        </label>
      </form>
      <ul>
        {this.state.drawn.map((card) =>
          <li key={card}>
            <VpAssignment card={card} handleRemove={this.handleRemove}/>
          </li>)}
      </ul>
      </div>
    );
  }
}
