import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../selectors';
import { Link } from 'react-router';

const Categories = ({ categories }) => {
	const renderCategory = (category, index) => {
		return (
			<Link to={`/categories/${category.id}`} className='list-group-item' key={ index }>
				{ category.name }
			</Link>
		)
	}

  return (
  	<div className='well'>
			<h4>Brand</h4>
			<div className='list-group'>
				{ categories.map((category, index) => renderCategory(category, index))};
			</div>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: getCategories(state)
})

export default connect(mapStateToProps, null)(Categories);