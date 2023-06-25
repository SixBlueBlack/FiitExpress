console.log(1)
async function Footer() {
    let footer = document.createElement('footer');
    footer.className = "contacts";
    footer.innerHTML = `
        <link rel="stylesheet" href="../static/modules/header/main.css">
        <link rel="stylesheet" href="../static/modules/header/media.css">
        <div class="container">
            <div class="contacts-title">
                <h2 class="title-1">Контакты</h2>
            </div>
            <div class="contacts-content" data-aos="fade-down">
                <p>Хотите узнать больше или связаться с нами?<br> Вам всегда рады!</p>
            </div>
            <div class="contacts-button" data-aos="fade-down">
                <a href="#!" class="btn">Написать</a>
            </div>

        </div>`
    return footer
}
