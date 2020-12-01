import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from './actions';
import './CartIcon.css'

function CartIcons({id}) {
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id));
    const remove = () => dispatch(removeFromCart(id));

    return (
        <div className="d-flex justify-content-center">
            <i
            onClick={add}
            className="CartIcon fas fa-cart-plus text-success mx-2"
             />
             <i
             onClick={remove}
             className="CartIcon fas fa-cart-arrow-down text-danger mx-2"
              />
        </div>
    )
}

export default CartIcons;