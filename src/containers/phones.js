import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import R from 'ramda';

import { fetchPhones, loadMorePhones } from '../actions/index';
import { getPhones } from '../selectors';

class Phones extends Component {

  componentDidMount() {
    this.props.fetchPhones()
  }
  
  renderPhone(phone, index) {
    const shortDescription = `${R.take(60, phone.description)}...`;

    return (
      <div className='col-sm-4 col-lg-4 col-md- book-list' key={index}>
        <div className='thumbnail'>
          <img className='img-thumbnail' src={ phone.image } alt={phone.name} />
          <div className='caption'>
            <h4 className='pull-right'>${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p>{shortDescription}</p>
            <p className='itemButton'>
              <button className='btn btn-primary'>
                Buy now!
              </button>
              <Link to={`/phones/${phone.id}`} className='btn btn-default'>
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { phones, loadMorePhones } = this.props;

    return (
      <div>
        <div className='books row'>
          { phones.map((phone, index) => this.renderPhone(phone, index)) }
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button className='pull-right btn btn-primary' onClick={ loadMorePhones }>
              Load more
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
})

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);