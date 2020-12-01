import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes'
import data from './data.json';
import { calcCartTotal } from './helpers'



const DEFAULT_STATE = {
    products: data.products,
    cartItems: {},
    cartTotal: 0.0,
    discountApplied: false,
    discountAmount: 0
};

const discounts = {
    REMOVE10: 0.1,
    REMOVE20: 0.2,
    REMOVE30: 0.3
}

function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const cartCopy = { ...state.cartItems};
            cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
            return {
                ...state,
                cartItems: cartCopy,
                cartTotal: calcCartTotal(
                    state.products,
                    cartCopy
                )
            };
        }

        case REMOVE_FROM_CART: {
            const cartCopy = { ...state.cartItems };
            if (!cartCopy[action.id]) return state;
            cartCopy[action.id]--;
            if (cartCopy[action.id] === 0) {
                delete cartCopy[action.id];
            }
            return {
                ...state,
                cartItems: cartCopy,
                cartTotal: calcCartTotal(
                    state.products,
                    cartCopy
                )
            }
        }

        case APPLY_DISCOUNT: {
            if (
                state.discountApplied === false && discounts[action.discount]
            ) {
                const discountAmount = discounts[action.discount];
                return {
                    ...state,
                    cartTotal: calcCartTotal(
                        state.products,
                        state.cartItems,
                        discountAmount
                    ),
                    discountApplied: true,
                    discountAmount
                }
            }
            return state;
        }

        default:
            return state;
    }
}

export default rootReducer;