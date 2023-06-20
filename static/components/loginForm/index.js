function LoginForm() {
    let div = document.createElement('div');
    div.innerHTML = `
<link rel="stylesheet" href="../static/components/loginForm/style.css">
    <div class="reg-form">
    <form class="forml" action="/api/login" method="post">
  <div class="containerl">
    <h1>Вход</h1>
    <p>Вход на сайт FIITExpress</p>
    <hr>
    <label for="login"><b>Логин</b></label>
    <input class="input" type="text" placeholder="Ваш логин" name="login" required>

    <label for="psw"><b>Пароль</b></label>
    <input class="input" type="password" placeholder="Ваш пароль" name="password" required>

    <input class="input" type="checkbox" checked ><label>Запомнить меня</label>
    <hr>

    <button type="button" class="registerbtn" onclick="Login(document.getElementsByName('login')[0].value, document.getElementsByName('password')[0].value)">Вход</button>
  </div>

  <div class="container signin">
    <p>Нет аккаунта? <a class="al" href="/register">Регистрация</a>.</p>
  </div>


</form>
</div>`
    return div
}

async function Login(login, password){
    let answer = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({login:login, password:password})
    })
    let success = (await answer.json())['success'];

    if (success)
        window.location.replace('/');
    else
        alert("Неверный пароль!")
}