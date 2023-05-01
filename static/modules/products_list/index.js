async function ProductsList(params) {
    let productsListNode = document.createElement('div');
    productsListNode.className = "col-md-8 row";



    let productsArray = await getProducts();


    Object.keys(productsArray).forEach(function (key) {
        let item = productsArray[key];
        productsListNode.append(productHTML(item));
    });

    return productsListNode
}

async function getProducts() {
    const response = await fetch("http://127.0.0.1:5000/get_products");
    return await response.json();
}