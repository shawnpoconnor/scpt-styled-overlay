import React, {Component} from 'react';

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleRemove(event.target.value)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        value={this.props.card}
      >
        Delete {this.props.card}
      </button>
    )
  }
}
