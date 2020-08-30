import React from 'react'

export default class InputDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      tempValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
   }

  handleChange(event) {
    this.setState({tempValue: event.target.value});
  }

  handleSubmitEdit(event) {
    event.preventDefault();
    this.setState({value: ''})
  }


  handleSubmitName(event) {
    event.preventDefault();
    if(this.state.tempValue !== '') {
      this.setState({value: this.state.tempValue});
    }else {
      alert('Please fill out form');
    }
  }

  render() {
    {if (this.state.value !== this.state.tempValue) {
        return (
          <div style={{
            width: this.props.width,
            float: this.props.float
          }}>
            <form onSubmit={this.handleSubmitName}>
              <label>
                <input type="text" placeholder={this.props.placeholder} tempValue={this.state.tempValue} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }else {
        return (
          <div style={{
            width: this.props.width,
            float: this.props.float
          }}>
          <h2>{this.state.value}</h2>
          <form onSubmit={this.handleSubmitEdit}>
            <input type="submit" value={this.props.inputType} />
          </form>
          </div>
        )
      }
    }
  }

}
