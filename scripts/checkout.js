import {cart, remove_cart_item} from './cart.js';
import {products} from '../data/products.js';


let order_container = document.querySelector(".js-order-summary");

display_order_summary();

function display_order_summary() {
    cart.forEach((cartItem)=>{

        const product_id = cartItem.productId;
        let matching_product;
    
        products.forEach((product)=>{
            if(product.id === product_id) {
                matching_product = product;
            }
        })
    
        // console.log(matching_product);
    
        
        order_container.innerHTML += `
            <div class="cart-item-container js-cart-item-container-${matching_product.id}">
                <div class="delivery-date">
                  Delivery date: Tuesday, June 21
                </div>
    
                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${matching_product.image}">
    
                  <div class="cart-item-details">
                    <div class="product-name">
                    ${matching_product.name}
                    </div>
                    <div class="product-price">
                      $${(matching_product.priceCents / 100).toFixed(2)}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link link-primary js-delete-order-item" data-product-id="${matching_product.id}">
                        Delete
                      </span>
                    </div>
                  </div>
    
                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                      <input type="radio" checked
                        class="delivery-option-input"
                        name="delivery-option-${matching_product.id}">
                      <div>
                        <div class="delivery-option-date">
                          Tuesday, June 21
                        </div>
                        <div class="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${matching_product.id}">
                      <div>
                        <div class="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${matching_product.id}">
                      <div>
                        <div class="delivery-option-date">
                          Monday, June 13
                        </div>
                        <div class="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `;
    });
}

let delete_btn = document.querySelectorAll(".js-delete-order-item");

delete_btn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        const product_id = btn.dataset.productId;
        remove_cart_item(product_id);
        document.querySelector(`.js-cart-item-container-${product_id}`).remove();
    });
});

// display_order_summary()
