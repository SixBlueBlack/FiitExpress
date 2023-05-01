function Cart() {
    let cart = document.createElement('div');
    cart.className = "col-md-4";
    cart.innerHTML =
        `<!-- Корзина -->
<link rel="stylesheet" href="../static/modules/cart/style.css">
        <!-- Корзина -->
        <div class="card mb-4">
            <div class="card-body">
                <h4 class="card-title">Ваш заказ</h4>
            <div data-cart-empty class="alert alert-secondary" role="alert">
                Корзина пуста
            </div>
            <!-- cart-wrapper -->
            <div class="cart-wrapper"></div>
            <!-- // cart-wrapper -->
            <!-- Стоимость заказа -->
            <div class="cart-total">
                <p data-cart-delivery class="none">
                    <span class="h5">Доставка:</span>
                    <span class="delivery-cost">250 ₽</span><br>
                    <span class="small">Бесплатно при заказе от 600 ₽</span>
                </p>
                <p>
                    <span class="h5">Итого:</span>
                    <span class="total-price">0</span>
                    <span class="rouble">₽</span>
                </p>
            </div>
            <!-- // Стоимость заказа -->

        </div>
            <!-- Оформить заказ -->
            <div id="order-form" class="card-body border-top none">
                <h4 class="card-title">Оформить заказ</h4>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ваш номер телефона">
                    </div>
                    <button type="submit" class="btn btn-primary">Заказать</button>
                </form>
        </div>
    <!-- // Оформить заказ -->
    </div>
    <!-- // Корзина -->`

    return cart
}