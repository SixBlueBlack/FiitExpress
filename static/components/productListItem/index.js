function ProductsListItem(item){
    let article = document.createElement('article');
    article.classList.add("products__item", "item-product");
    article.setAttribute("data-pid", "1");
    article.innerHTML = `
              <link rel="stylesheet" href="../static/components/productListItem/style.css">
              <div class="item-product__image _ibg">
                <img class="product-img" src="../static/img/homeworks/${item.imgSrc}" alt="" >
              </div>
              <div class="item-product__body">
                <div class="item-product__content">
                  <h5 class="item-product__title">${item.title}</h5>
                  <div class="item-product__text">Помощь в решение недорого</div>
                </div>
                <div class="item-product__prices">
                  <div class="item-product__price ">${item.price}₽</div>
                  <div class="item-product__price item-product__price_old">${item.price}₽</div>
                </div>
                <div class="item-product__actions actions-product">
                  <div class="actions-product__body">
                    <a href="/product/${item.id}"  class="white-btn_a">
                        <button class="white-btn">Подробнее</button>
                    </a>
                    <a href="" class="orange-btn_a">
                      <button data-cart class="orange-btn">В корзину</button>
                    </a>
                  </div>
                </div>
              </div>`
    return article;
}