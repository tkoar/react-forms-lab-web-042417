import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  remainingChars() {
    return (this.props.maxChars - this.state.message.length)
  }

  changeMessage(event) {
    this.setState({
      ...this.state,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.props.maxChars - this.state.message.length}</strong>
        <input type="text"
        onChange={this.changeMessage.bind(this)}
        value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
