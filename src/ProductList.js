import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CartIcons from './CartIcons';

function ProductList() {
    const products = useSelector(st => st.products);
    const productCards = Object.keys(products).map(id => (
        <div key={id}>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <Link to={`/products/${id}`}>{products[id].name}</Link>
                    </h2>
                    <CartIcons id={id} />
                </div>
            </div>

        </div>
    ));
    return (
        <div>
            <h3>This is what we got!</h3>
            <div className="row">{productCards}</div>
        </div>
    )
}


export default ProductList;