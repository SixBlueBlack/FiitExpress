function ShowHeader() {
        const headerHTML = `<link rel="stylesheet" href="../static/modules/header/style.css">
                <header class="header-overall">
                        <img class="header-logo header-element" src="../static/img/logo/logo.jpg"  alt="Суши и пицца">
                        <div class="header-label header-element">Быстрое гдз</div>
                </header>`

        document.body.insertAdjacentHTML('afterbegin', headerHTML)
}
