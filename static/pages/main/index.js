async function ShowMainPage() {
    document.body.prepend(await Header())
    document.getElementById('main-container').append(await IndexBlock());
    document.getElementById('main-container').append(await Footer());

    // document.getElementById('main-container').append(await Cart());
}

ShowMainPage();