async function ShowMainPage() {
    document.body.prepend(await Header())
    document.getElementById('main-container').append(await ProductsList());

    document.getElementById('main-container').append(Cart());
}

ShowMainPage();