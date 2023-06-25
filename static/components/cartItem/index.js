async function CartItem(usersProductData) {
    let div = document.createElement('div');
    div.className = "cart_box";
    div.innerHTML = `
          <link rel="stylesheet" href="../static/components/cartItem/style.css">
          <img class="product-img" src=${usersProductData["imgSrc"]} alt="">
          <div class="cart_content">
            <h3 class="cart_content__title">${usersProductData["title"]}</h3>
            <div class="cart_content__price">${usersProductData["price"]}</div>

            <div class="counter">
              <span class="down" data-action="minus">-</span>
              <div class="counter-text" type="text" data-counter>1</div>
              <span class="up"  data-action="plus">+</span>
            </div>
            <script type="text/javascript">
            </script>

            <div class="cart_btn_area">
              <i>
                <svg class="svg" viewBox="0 0 400 400" style="transform: rotate(0deg);">
                  <path d="M284 325l-168 0 0 -213 -20 0 5 -25 77 0 2 -12 40 0 2 12 77 0 5 25 -20 0 0 213zm-142 -27l22 0 0 -163 -22 0 0 163zm47 0l22 0 0 -163 -22 0 0 163zm47 0l22 0 0 -163 -22 0 0 163z" />
                </svg>
              </i>
            </div>
          </div>
          `
    return div
}