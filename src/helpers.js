export function calcCartTotal(products, cart) {
    let total = 0;
    for (let id in products) {
        const { price } = products[id];
        const qty = cart[id] || 0;
        total += price * qty;
    }

    return total.toFixed(2);
}

export function calcTotalQty(cart) {
    let totalQty = 0;
    for (let id in cart) {
        totalQty += cart[id];
    }
    return totalQty;
}