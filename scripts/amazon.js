import {add_to_cart, update_cart_quantity} from './cart.js';
import {products} from '../data/products.js';



let productContainer = document.querySelector(".js-product-grid");

let productHTML = '';

display_products()

function display_products(){
    products.forEach((product)=>{
        productHTML += `
        
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>
    
              <div class="product-name limit-text-to-2-lines">
              ${product.name}
              </div>
    
              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
              </div>
    
              <div class="product-price">
                $${product.priceCents /100}
              </div>
    
              <div class="product-quantity-container">
                <select class="js-quantity-selected js-quantity" data-product-id = "${product.id}">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
    
              <div class="product-spacer"></div>
    
              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>
    
              <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}">
                Add to Cart
              </button>
            </div>
        `
    });
    
    productContainer.innerHTML = productHTML;
}

let add_to_cart_btn = document.querySelectorAll(".js-add-to-cart");
let quantity_selector = document.querySelectorAll(".js-quantity");


add_to_cart_btn.forEach((btn) => {
    // let quantity;
    btn.addEventListener("click", ()=>{
        const productId = btn.dataset.productId;
        // let quantity_selected = get_quantity()
        // for(let i=0; i<quantity_selected.length-1; i++) {
        //     print(i)
        // }
        // quantity = quantity_selected
        add_to_cart(productId);
        update_cart_quantity();
    })

    
})

function get_quantity() {
    let dropdowns = []
    quantity_selector.forEach((dropdown)=>{
        let drop_down_id = dropdown.dataset.productId;
        let drop_down_value = Number(dropdown.value);
        dropdowns.push({
            dropdown_id : drop_down_id,
            drop_down_value : drop_down_value,
        });
    })
    console.log(dropdowns);
    return dropdowns;
}

  // for(let dropdown of quantity_selector) {
    //     console.log(dropdown.dataset.productId)
    //     return Number(dropdown.value);
    // }