import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return(
      <h3>{this.props.tech}</h3>
    );
  }
}

export default HelloWorld;
