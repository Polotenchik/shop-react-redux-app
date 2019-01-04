import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import { getTotalBasketPrice, getBasketWithCount } from '../selectors';

const Basket = ({ phones, totalPrice }) => {
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
										<span className='delete-cart' />
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
      	Sidebar 
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
})

export default connect(mapStateToProps, null)(Basket);