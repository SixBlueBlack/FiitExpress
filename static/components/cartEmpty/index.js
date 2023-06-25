async function CartEmpty() {
    let div = document.createElement('div');
    div.className = "cart_box_empty";
    div.innerHTML = `
          <link rel="stylesheet" href="../static/components/cartEmpty/style.css">
          <div class="empty-cart">В корзине пока пусто</div>
          <div class="empty-cart-small">Загляните во Все задачи или найдите нужное в поиске</div>
          `
    return div
}