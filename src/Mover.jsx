import React, { Component } from 'react';

class Mover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      this.tick,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    const buffer = this.state.counter + 15;

    this.setState({
      counter: buffer,
    });
  }

  render() {
    return (
      <div style={{ marginLeft: this.state.counter }}>Mover</div>
    );
  }
}

export default Mover;
