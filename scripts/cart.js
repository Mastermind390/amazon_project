export let cart = JSON.parse(localStorage.getItem("cart"));


function save_cart_to_localStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export function add_to_cart(productId) {
    let matchingItem;

        cart.forEach((item)=>{
            if (productId === item.productId) {
                matchingItem = item;
            } 
        });

        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                productId : productId,
                quantity : 1,
            })
        }
        save_cart_to_localStorage()
}

export function update_cart_quantity() {
    let cartQuantity = 0;
    cart.forEach((item)=>{
        cartQuantity += item.quantity
    });
    console.log(cartQuantity)
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}



export function remove_cart_item(product_id) {
    let new_cart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== product_id) {
            new_cart.push(cartItem);
        };
    });
    cart = new_cart;
    save_cart_to_localStorage();
};