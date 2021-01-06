import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = (event) => {

    this.setState({
      message: event.target.value
    })
  }




  render() {
    return (
      <div>
        <strong>Your message:{this.maxChars}</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.message}/>
        <p>Characters remaining: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
