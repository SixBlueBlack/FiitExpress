async function ProductsList(sort = 'priceDesc') {
    let div = document.createElement('div');
    div.id = "products_list"
    div.className = "products__items";

    return div
}

async function RefreshProductsList(sort = 'alphaAsc', categories = 'all', lower_bound = null, upper_bound = null) {
    window.productsArray = await getProducts(categories, lower_bound, upper_bound);

    await ReSortProductsList(sort);
}

async function ReSortProductsList(sort){
    let div = document.getElementById('products_list');
    div.innerHTML = ``;
    if (sort === 'priceAsc') {
        let fn = function (a, b) {
            if (a.price > b.price) return 1;
            if (a.price === b.price) return 0;
            if (a.price < b.price) return -1;
        }
        window.productsArray.sort(fn);
    } else if (sort === 'priceDesc') {
        let fn = function (a, b) {
            if (a.price < b.price) return 1;
            if (a.price === b.price) return 0;
            if (a.price > b.price) return -1;
        }
        window.productsArray.sort(fn);
    } else if (sort === 'alphaAsc') {
        let fn = function (a, b) {
            if (a.title > b.title) return 1;
            if (a.title === b.title) return 0;
            if (a.title < b.title) return -1;
        }
        window.productsArray.sort(fn);
    } else if (sort === 'alphaDesc') {
        let fn = function (a, b) {
            if (a.title < b.title) return 1;
            if (a.title === b.title) return 0;
            if (a.title > b.title) return -1;
        }
        window.productsArray.sort(fn);
    }


    Object.keys(productsArray).forEach(function (key) {
        let item = productsArray[key];
        div.append(ProductsListItem(item));
    });
}

async function getProducts(categories, lower_bound, upper_bound) {
    if (window.productType === 'tutors') {
        const response = await fetch(`http://127.0.0.1:5000/api/get_tutors?category=${categories}&lower_bound=${lower_bound}&upper_bound=${upper_bound}`);
        return await response.json();
    }
    else{
        const response = await fetch(`http://127.0.0.1:5000/api/get_products?category=${categories}&lower_bound=${lower_bound}&upper_bound=${upper_bound}`);
        return await response.json();
    }
}