function CartRightBar(){
    let div = document.createElement('div');
    div.className = "cart_right_bar";
    div.innerHTML = `
    <link rel="stylesheet" href="../static/components/cartRightBar/style.css">
    <div class="cart_counter">Товары, 1 шт.</div>
    <p>
      <span class="text_total-price">Итог:</span>
      <div class="value_total-price">
        <span class="total-price">0</span>
        <span class="rouble">₽</span>
      </div>
    </p>

    <a data-action="checkout"><i class="fa fa-shopping_cart" ></i>Оформить</a>
    `
    return div
}