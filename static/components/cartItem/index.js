function CartItem() {
    let div = document.createElement('div');
    div.className = "cart_box";
    div.innerHTML = `
          <link rel="stylesheet" href="../static/components/cartItem/style.css">
          <img src="https://clever-lady.ru/wp-content/uploads/2023/01/stay-home-5205390_19.png" alt="">
          <div class="cart_content">
            <h3>Задачи по матану</h3>
            <div class="cart_content__price">250</div>
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
          
          <link rel="stylesheet" href="../static/components/cartItem/style.css">
          <img src="https://clever-lady.ru/wp-content/uploads/2023/01/stay-home-5205390_19.png" alt="">
          <div class="cart_content">
            <h3>Задачи по матану</h3>
            <div class="cart_content__price">250</div>
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