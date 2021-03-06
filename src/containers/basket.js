import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import { Link } from 'react-router';
import { getTotalBasketPrice, getBasketWithCount } from '../selectors';
import { removePhoneFromBasket, basketCheckout, clearBasket } from '../actions/index';
import basket from '../reducers/basket';


const Basket = ({ phones, totalPrice, removePhoneFromBasket, clearBasket, basketCheckout }) => {
  const isBasketEmpty = R.isEmpty(phones);

  const renderContent = () => {
		return (
  	<div>
      { isBasketEmpty && <div>Your shopping cart is empty</div>}
    	<div className='table-responsive'>
				<table className='table-bordered table-striped table-condensed cf'>
					<tbody>
						{ phones.map((phone, index) => (
							<tr className='item-checkout' key={ index }>
									<td className='first-column-checkout'>
										<img className='img-thumbnail' src={ phone.image } alt={ phone.count } />
									</td>
									<td>{ phone.name }</td>
									<td>{ phone.price }</td>
									<td>{ phone.price }</td>
									<td>
										<span 
											className='delete-cart'
											onClick={() => removePhoneFromBasket(phone.id) } 
										/>
									</td>
							</tr>
						))}
					</tbody>
				</table>
    	</div>
			{ R.not(isBasketEmpty) && 
				<div classname='row'>
					<div className='pull-right total-user-checkout'>
						<b>Total:</b>
						${ totalPrice }
					</div>
				</div>
			}
    </div>
		);
  }
	
	const renderSideBar = () => {
    return (
			<div>
      	<Link to='/' className='btn btn-info'>
					<span className='glyphicon glyphicon-info-sign'></span>
					<span>Continue shopping</span>
				</Link>
				{
					R.not(isBasketEmpty) &&
						<div>
							<button className='btn btn-danger' onClick={ clearBasket }>
								<span className='glyphicon glyphicon-trash'/>
								Clear cart
							</button>
							<button className='btn btn-success' onClick={ () => basketCheckout(phones) }>
								<span className='glyphicon glyphicon-envelope' />
							</button>
							Checkout
						</div>
				}
			</div>
		);
  }

  return (
    <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            { renderContent() }
          </div>
          <div className='col-md-3 btn-user-checkout'>
            { renderSideBar() }
          </div>
        </div>
      </div>
  	</div>
  )
}

const mapStateToProps = state => ({
  phones: getBasketWithCount(state),
  totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = {
	removePhoneFromBasket,
	basketCheckout,
	clearBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);