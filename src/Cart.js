import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcons from './CartIcons'

function Cart() {
    const dispatch = useDispatch();
    const {
        cartItems,
        cartTotal,
        products
    } = useSelector(st => st);

    const cartList = () => {
        const items = Object.keys(cartItems).map(id => (
            <tr key={id}>
                <td className="text-center align-middle">
                    <Link to={`/products/${id}`}>{products[id].name}</Link>
                </td>
                <td className="text-center align-middle">${products[id].price}</td>
                <td className="text-center align-middle">${cartItems[id]}</td>
                <td>
                    <CartIcons id={id} />
                </td>
            </tr>
        ))
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    };

    return cartItems.length === 0 ? (
        <h2>No Items In Your Cart</h2>
    ) : (
        <div>
            {cartList}
            <p>Total: ${cartTotal}</p>
        </div>
    )
}

export default Cart;