async function Cart(){
    document.body.prepend(await Header());
    let div = document.createElement('div');
    div.className = "cart-wrapper";
    div.innerHTML = `
      <h1>Корзина</h1>
      <div class="cart_project" id="cart_project">
        <div class="cart_shop" id="cart_shop"></div>
      </div>`


    document.getElementById('main-container').append(div);
    // поле с итогом
    document.getElementById('cart_project').append(CartRightBar());
    // основное поле с покупкой и счетчиками
    document.getElementById('cart_shop').append(CartItem())
    document.body.append(await Footer());
    console.log(document.querySelector('.cart-wrapper'));
    console.log(document.querySelector('.cart_project'));
    console.log(document.querySelector('.cart_shop'));
    // console.log(GetProductInfo());
}
Cart();