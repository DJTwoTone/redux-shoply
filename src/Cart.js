import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcons from './CartIcons'
import { applyDiscount } from './actions';

function Cart() {
    const [discount, setDiscount] = useState("");
    const dispatch = useDispatch();
    const {
        cartItems,
        cartTotal,
        products,
        discountApplied,
        discountAmount
    } = useSelector(st => st);

    const handleChange = evt => {
        setDiscount(evt.target.value);
    }

    const handleDiscount = evt => {
        evt.preventDefault()
        dispatch(applyDiscount(discount));
        setDiscount("");
    }

    const cartList = () => {
        const items = Object.keys(cartItems).map(id => (
            <tr key={id}>
                <td className="text-center align-middle">
                    <Link to={`/products/${id}`}>{products[id].name}</Link>
                </td>
                <td className="text-center align-middle">${products[id].price}</td>
                <td className="text-center align-middle">{cartItems[id]}</td>
                <td>
                    <CartIcons id={id} />
                </td>
            </tr>
        ));

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
            {cartList()}
            <p>
                Total: ${cartTotal}
                {discountApplied ? (
                    <span className='text-success mx-2'>
                        YOU SAVED {(discountAmount * 100).toFixed(0)}%!
                    </span>
                ) : null}
            </p>

            <form onSubmit={handleDiscount} className="form-inline">
                <label htmlFor="discount">DISCOUNT CODE:</label>
                <input
                id="discount"
                value={discount}
                onChange={handleChange}
                name="discount"
                type="text"
                className="form-control mx-2"
                />
                <button className="btn btn-primary">Apply discount</button>
            </form>
        </div>
    )
}

export default Cart;