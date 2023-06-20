function CartItem() {
    let div = document.createElement('div');
    div.className = "cart_box";
    div.innerHTML = `
          <link rel="stylesheet" href="../static/components/cartItem/style.css">
          <img src="https://clever-lady.ru/wp-content/uploads/2023/01/stay-home-5205390_19.png" alt="">
          <div class="cart_content">
            <h3>Задачи по матану</h3>
            <div class="cart_content__price ">250₽</div>
            <div class="cart_content__price cart_content__price_old">350₽</div>


            <div class="counter">
              <span class="down" onClick='decreaseCount(event, this)'>-</span>
              <input type="text" value="1">
              <span class="up"  onClick='increaseCount(event, this)'>+</span>
            </div>
            <script type="text/javascript">
              function increaseCount(a, b) {
                let input = b.previousElementSibling;
                let value = parseInt(input.value, 10);
                value = isNaN(value)? 0 : value;
                value ++;
                input.value = value;
              }
              function decreaseCount(a, b) {
                const input = b.nextElementSibling;
                let value = parseInt(input.value, 10);
                if (value > 1) {
                  value = isNaN(value)? 0 : value;
                  value --;
                  input.value = value;
                }
              }
            </script>


            <div class="cart_btn_area">
              <i class="fa fa-trash"></i>
            </div>

          </div>
    `
    return div
}