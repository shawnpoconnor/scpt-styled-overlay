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
    const isUndrawn = this.state.undrawn.includes(this.state.value);
    console.log(this.state.value);
    if (isUndrawn && this.state.value != '-') {
      this.setState({
        drawn:   this.state.drawn.concat([this.state.value]),
        undrawn: this.state.undrawn.filter(card=> card != this.state.value),
        value:   this.state.undrawn[0]
      })
    }else {
      alert('one second please')
    }
  }

  componentDidMount() {

  }

  handleRemove(cardToRemove) {
    this.setState({
      undrawn:   this.state.undrawn.concat([cardToRemove]),
      drawn:     this.state.drawn.filter(drawnCard => drawnCard != cardToRemove),
    });
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
            <VpAssignment key={card} colors={this.props.colors} card={card} handleRemove={this.handleRemove}/>
          </li>)}
      </ul>
      </div>
    );
  }
}
