function CartRightBar(){
    let div = document.createElement('div');
    div.className = "cart_right_bar";
    div.innerHTML = `
    <link rel="stylesheet" href="../static/components/cartRightBar/style.css">
    <div class="cart_counter">Товары, 1 шт.</div>
        <p><span>Итого:</span>
                <span class="total-price">0</span>
                <span class="rouble">₽</span></p>

        <a href=""><i class="fa fa-shopping_cart"></i>Оформить</a>
    `
    return div
}