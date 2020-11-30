import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact>
                <ProductList />
            </Route>
            <Route path='/products/:id' exact>
                <ProductDetails />
            </Route>
            <Route path='cart' exact>
                <Cart />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;