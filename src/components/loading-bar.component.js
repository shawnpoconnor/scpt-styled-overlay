import React, { Component } from 'react';

export default class LoadingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: ">",
      double: ""
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.add(),
      1000
    );
  }


  componentWillUnmount() {
    clearInterval(this.timerID)
  }


  add() {
    if (this.state.single.length > 2) {
        this.addDouble()
    }else {
        this.addSingle()
    }
  }

  addSingle() {
    this.setState({
      single: "-".concat(this.state.single)
    });
  }

  addDouble() {
    this.setState({
      double: "=".concat(this.state.double),
      single: ">"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.double + this.state.single}</h1>
      </div>
    );
  }
}
