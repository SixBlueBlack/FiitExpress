async function CartItem(usersProductData) {
    let div = document.createElement('div');
    div.className = "cart_box";
    div.innerHTML = `
          <link rel="stylesheet" href="../static/components/cartItem/style.css">
          <img class="product-img" src=${usersProductData["imgSrc"]} alt="">
          <div class="cart_content">
            <h3 class="cart_content__title">${usersProductData["title"]}</h3>
            <div class="cart_content__price">${usersProductData["price"]}</div>
            <div class="cart_content__price_old">350₽</div>

            <div class="counter">
              <span class="down" data-action="minus">-</span>
              <div type="text" data-counter>1</div>
              <span class="up"  data-action="plus">+</span>
            </div>
            <script type="text/javascript">
            </script>

            <div class="cart_btn_area">
              <i class="fa fa-trash"></i>
            </div>
          </div>
    `
    return div
}