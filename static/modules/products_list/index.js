async function ProductsList(params) {
    let div = document.createElement('div');
    div.className = "products__items";

    let productsArray = await getProducts();


    Object.keys(productsArray).forEach(function (key) {
        let item = productsArray[key];
        div.append(ProductsListItem(item));
    });

    return div
}

async function getProducts() {
    const response = await fetch("http://127.0.0.1:5000/api/get_products");
    return await response.json();
}