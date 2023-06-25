async function Product(item){
    let productElement = document.createElement('div');
    productElement.className = "container"
    productElement.innerHTML = `
      <link rel="stylesheet" href="../static/modules/product/style.css">
      <div class="item-card">
        <div class="item-image">
            <img src="../static/img/homeworks/${item.imgSrc}" alt="Фото товара">
        </div>
        <div class="info">
            <div class="title">
                  <h2>${item.title}</h2>
            </div>
            <div class="description">
                <p>Тут описание, которого нет(<p>
            </div>
            <div class="add-to-basket">
                <p class="coast">${item.price} ₽</p>

                <a href="#!" class="btn">Добавить в корзину</a>
            </div>
        </div>
      </div>`
    return productElement;
}