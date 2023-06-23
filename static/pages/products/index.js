async function ShowMainPage() {
    window.userData = {'cart':{}}
    document.body.prepend(await Header());
    document.getElementById('main-container').append(Filter())
    document.getElementById('main-container').append(await ProductsList());
    // document.getElementById('side-menu-placeholder').prepend(FilterMenu());
}

ShowMainPage();