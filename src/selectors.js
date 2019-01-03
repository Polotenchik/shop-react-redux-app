import R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryId(ownProps);
    const applySearch = item => R.contains(
        state.phonePage.search,
        R.prop('name', item)
    );
    const applyCategory = item => R.equals(
        activeCategoryId,
        R.prop('categoryId', item)
    );

    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)), 
        R.map(id => getPhoneById(state,id)) 
    )(state.phonePage.ids);

    return phones;
}

export const getRenderedPhonesLength = state => R.length(state.phonePage.ids);

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket);

    return totalPrice;
};

export const getCategories = state => R.values(state.categories);

export const getActiveCategoryId = ownProps => R.path(['params', 'id'], ownProps);