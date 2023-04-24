function ShowCart(){
    cartHTML = `<!-- Корзина -->
\t\t\t<div class="col-md-4">
<link rel="stylesheet" href="../static/modules/cart/style.css">
\t\t\t\t<!-- Корзина -->
\t\t\t\t<div class="card mb-4">
\t\t\t\t\t<div class="card-body">
\t\t\t\t\t\t<h4 class="card-title">Ваш заказ</h4>
\t\t\t\t\t\t\t<div data-cart-empty class="alert alert-secondary" role="alert">
\t\t\t\t\t\t\tКорзина пуста
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<!-- cart-wrapper -->
\t\t\t\t\t\t<div class="cart-wrapper">
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<!-- // cart-wrapper -->
\t\t\t\t\t\t<!-- Стоимость заказа -->
\t\t\t\t\t\t<div class="cart-total">
\t\t\t\t\t\t\t<p data-cart-delivery class="none">
\t\t\t\t\t\t\t\t<span class="h5">Доставка:</span>
\t\t\t\t\t\t\t\t<span class="delivery-cost">250 ₽</span><br>
\t\t\t\t\t\t\t\t<span class="small">Бесплатно при заказе от 600 ₽</span>
\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t<p><span class="h5">Итого:</span>
\t\t\t\t\t\t\t\t<span class="total-price">0</span>
\t\t\t\t\t\t\t\t<span class="rouble">₽</span></p>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<!-- // Стоимость заказа -->

\t\t\t\t\t</div>
\t\t\t\t\t<!-- Оформить заказ -->
\t\t\t\t\t<div id="order-form" class="card-body border-top none">
\t\t\t\t\t\t<h4 class="card-title">Оформить заказ</h4>
\t\t\t\t\t\t<form>
\t\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="Ваш номер телефона">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<button type="submit" class="btn btn-primary">Заказать</button>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t\t<!-- // Оформить заказ -->
\t\t\t\t</div>
\t\t\t\t<!-- // Корзина -->
\t\t\t</div>`

    document.getElementById('main-container').insertAdjacentHTML('beforeend', cartHTML);
}