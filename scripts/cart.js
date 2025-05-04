export const cart = [

]

export function add_to_cart(productId) {
    let matchingItem;

        cart.forEach((item)=>{
            if (productId === item.productId) {
                matchingItem = item
            } 
        });

        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                productId : productId,
                quantity : 1
            })
        } 
}

export function update_cart_quantity() {
    let cartQuantity = 0;
    cart.forEach((item)=>{
        cartQuantity += item.quantity
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}