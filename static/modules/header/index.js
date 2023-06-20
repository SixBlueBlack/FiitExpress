async function Header1() {
        let header = document.createElement('header')
        header.className = "header-overall"
        header.innerHTML = `
                <link rel="stylesheet" href="../static/modules/header/style.css">
                <a href="/"><img class="header-logo header-element" src="../static/img/logo/logo.jpg"  alt="Суши и пицца"></a>
                <div class="header-label header-element">Быстрое гдз</div>
                <a>Задачи</a>
                <a>Создать товар</a>
                <a>Корзина</a>
                        `

        header.insertAdjacentHTML('beforeend', await getAuthBlock())
        return header
}

async function Header() {
        let header = document.createElement('header');
        header.className = "header";
        header.innerHTML = `
        <link rel="stylesheet" href="../static/modules/header/main.css">
        <link rel="stylesheet" href="../static/modules/header/media.css">
        <div class="container">
            <div class="header-nav">
                <a href="/" class="logo">FIIT Express</a>

                <nav id="nav" class="nav">
                    <ul class="nav-list">
                        <li class="nav-item"><form>
                            <input type="text" placeholder="Искать здесь...">
                            <button type="submit">Искать</button>
                        </form>
                        </li>
                        <li class="nav-item"><a href="/products" class="nav-link">Все задачи</a></li>
<!--                        <li class="nav-item"><a href="/" class="nav-link">Репетиторы</a></li>-->
                        <li class="nav-item"><a href="/create_product" class="nav-link">+Создать товар</a></li>
                        </ul>
                        
                        ${await getAuthBlock()}                   
                    <button id="nav-btn" class="nav-button">
                        <img id="nav-btn-img" src="../static/modules/header/img/icons/nav-open.svg" alt="Nav button">
                    </button>
                </nav>
            </div>
        </div>`
        return header
}

async function getAuthBlock(){
        let userInfo = await getUserInfo()
        if(userInfo['is_anonymous'] === false)
                return `
                 <ul class="nav-list">
                        <li class="nav-item"><a href="/cart" class="nav-link">
                            <img id="basket-icon" src="../static/modules/header/img/icons/basket.svg" alt="Корзина">
                            </a>
                        </li>
                        <li class="nav-item"><a href="#!" class="nav-link">${userInfo['login']}</a></li>
                        <li class="nav-item">
                        <a onclick="Logout()" class="nav-link">
                            <img id="logout-icon" src="../static/modules/header/img/icons/logout.svg" alt="Выход"></a>
                        </li>
                    </ul>`
        else return `
                 <ul class="nav-list">
                        <li class="nav-item"><a href="/" class="nav-link">

                        </li>
                        <li class="nav-item"><a href="/login" class="nav-link">Вход</a></li>
                        <li class="nav-item"><a href="/register" class="nav-link">Регистрация</a>
                        </li>
                    </ul>`
}

async function getUserInfo(){
        let userInfoPromise = await fetch("/api/get_user_info")
        return userInfoPromise.json()
}

async function logout(){
        console.log("logged out")
        await fetch("http://127.0.0.1:5000/api/logout")
        location.reload()
}