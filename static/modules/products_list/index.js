async function ProductsList(sort='priceDesc') {
    let div = document.createElement('div');
    div.id = "products_list"
    div.className = "products__items";

    return div
}

async function RefreshProductsList(sort){
    let div = document.getElementById('products_list');
    div.innerHTML = ``;

    let productsArray = await getProducts();

    if (sort === 'priceAsc'){
        let fn = function (a, b){
            if(a.price > b.price) return 1;
            if(a.price === b.price) return 0;
            if(a.price < b.price) return -1;
        }
        productsArray.sort(fn);
    }
    else if (sort === 'priceDesc'){
                let fn = function (a, b){
            if(a.price < b.price) return 1;
            if(a.price === b.price) return 0;
            if(a.price > b.price) return -1;
        }
        productsArray.sort(fn);
    }
    else if (sort === 'alphaAsc'){
                let fn = function (a, b){
            if(a.title > b.title) return 1;
            if(a.title === b.title) return 0;
            if(a.title < b.title) return -1;
        }
        productsArray.sort(fn);
    }
    else if (sort === 'alphaDesc') {
                let fn = function (a, b){
            if(a.title < b.title) return 1;
            if(a.title === b.title) return 0;
            if(a.title > b.title) return -1;
        }
        productsArray.sort(fn);
    }


    Object.keys(productsArray).forEach(function (key) {
        let item = productsArray[key];
        div.append(ProductsListItem(item));
    });
}

async function getProducts() {
    const response = await fetch("http://127.0.0.1:5000/api/get_products");
    return await response.json();
}