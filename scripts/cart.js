export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        priceCents: 1090,
        quantity : 1,
      },

      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/products/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        priceCents: 2095,
      }
]

export function add_to_cart(productId) {
    let matchingItem;

        cart.forEach((item)=>{
            if (productId === item.productId) {
                matchingItem = item
            } 
        });

        if (matchingItem) {
            matchingItem.quantity;
            // console.log(matchingItem)
        } else {
            cart.push({
                productId : productId,
                quantity : 1,
            })
        }
        console.log(cart)
}

export function update_cart_quantity() {
    let cartQuantity = 0;
    cart.forEach((item)=>{
        cartQuantity += item.quantity
    });
    console.log(cartQuantity)
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}