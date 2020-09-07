import React, { Component } from "react";

export default class Loading extends Component {
  constructor(props) {
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? props.children : props.children;
  }
}
