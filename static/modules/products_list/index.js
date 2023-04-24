function ShowProductsList() {
    const productsListHTML = `<div class="col-md-8">
                                <div class="row" id="products-container">
                                </div>
                              </div>`;

    document.getElementById('main-container').insertAdjacentHTML('afterbegin', productsListHTML);

    getProducts()
}