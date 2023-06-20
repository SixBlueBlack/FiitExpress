async function ShowProductPage(product) {
    document.body.prepend(await Header())
    document.getElementById('main-container').append(await Product(window.currentProduct));
}
ShowProductPage("e");