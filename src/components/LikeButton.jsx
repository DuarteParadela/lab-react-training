import React from "react";

class LikeButton extends React.Component {

  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleIncrement}>Like</button>
      </div>
    );
  }
}

export default LikeButton;
