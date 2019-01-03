import React from 'react';
import BasketCart from './BasketCard';
import Search from './Search';
import Categories from './Categories';

const Sidebar = () => (
    <div>
        <BasketCart />
        <Search />
        <Categories />
    </div>
);

export default Sidebar;