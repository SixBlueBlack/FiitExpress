async function Header() {
        let header = document.createElement('header')
        header.className = "header-overall"
        header.innerHTML = `
                <link rel="stylesheet" href="../static/modules/header/style.css">
                        <img class="header-logo header-element" src="../static/img/logo/logo.jpg"  alt="Суши и пицца" onclick="">
                        <div class="header-label header-element">Быстрое гдз</div>
                        `

        header.insertAdjacentHTML('beforeend', await getAuthBlock())
        return header
}

async function getAuthBlock(){
        let userInfo = await getUserInfo()
        if(userInfo['is_anonymous'] === false)
                return `
                <label>Hello, ${userInfo['login']}</label>
                <a class="auth-item" id="logout" onclick="logout()">Logout</a>
                `
        else return `
                <a class="auth-item" id="login" href="/login">Вход</a>
                <a class="auth-item" id="register" href="/register">Регистрация</a>
        `
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