import React, {Component} from 'react';

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardToRemove: this.props.card
    };
  }

  render() {
    return (
      <form onClick={this.props.handleRemove}>
      <input type="submit" value={this.state.cardToRemove}/>
      </form>
    )
  }
}
