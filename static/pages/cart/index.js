async function Cart(){
    document.body.prepend(await Header());
    let div = document.createElement('div');
    div.className = "cart-wrapper";
    div.innerHTML = `
      <h1>Корзина</h1>
      <div class="cart_project" id="cart_project">
        <div class="cart_shop" id="cart_shop"></div>
      </div>
    `
    document.getElementById('main-container').append(div);
    document.getElementById('cart_project').append(CartRightBar());
    document.getElementById('cart_shop').append(CartItem())
}
Cart();