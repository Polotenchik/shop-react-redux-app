import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phones extends Component {

  componentDidMount() {
    this.props.fetchPhones()
  }
  
  render() {
    return (
      <div>
        Phones
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchPhones
}

export default connect(null, mapDispatchToProps)(Phones);