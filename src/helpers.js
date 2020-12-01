export function calcCartTotal(products, cart, discountAmount = 0) {
    let total = 0;
    for (let id in products) {
        const { price } = products[id];
        const qty = cart[id] || 0;
        total += price * qty;
    }
    let withDiscount = total * (1 - discountAmount)
    return withDiscount.toFixed(2);
}

export function calcTotalQty(cart) {
    let totalQty = 0;
    for (let id in cart) {
        totalQty += cart[id];
    }
    return totalQty;
}