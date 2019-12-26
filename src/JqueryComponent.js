import React, { Component } from 'react';

class JqueryComponent extends Component {
  constructor(props) {
    super(props);
    this.component = React.createRef();
  }
  componentDidMount() {
    console.log('---', this.component)
  }
  render() {
    return (
      <div ref={this.component} />
    )
  }
}

export default JqueryComponent;