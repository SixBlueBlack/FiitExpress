function RegisterForm() {
    let div = document.createElement('div');

    div.innerHTML = `
    <link rel="stylesheet" href="../static/components/loginForm/style.css">
        <div class="reg-form">
        <form class="forml" action="/api/register" method="post">
          <div class="containerl">
          <h1>Регистрация</h1>
          <p>Регистрация на сайте FIITExpress</p>
          <hr>
    <label for="login"><b>Логин</b></label>
    <input class="input" type="text" placeholder="Ваш логин" name="login" required>
    
    <label for="login"><b>Почта</b></label>
    <input class="input" type="text" placeholder="Ваша почта" name="mail" required>
    
    <label for="psw"><b>Пароль</b></label>
    <input class="input" type="password" placeholder="Повтор пароля" name="confirmPassword" required>

    <input class="input" type="checkbox" checked id="rememberMe"><label>Запомнить меня</label>
    <hr>

    <button type="button" class="registerbtn" onclick="Register()">Вход</button>
  </div>

  <div class="container signin">
    <p>Уже есть аккаунт? <a class="al" href="/register">Вход</a>.</p>
  </div>


</form>
</div>`
    return div
}

async function Register(){
    let answer = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
            login : document.getElementsByName('login')[0].value,
            mail : document.getElementsByName('mail')[0].value,
            password : document.getElementsByName('password')[0].value,
            confirmPassword : document.getElementsByName('confirmPassword')[0].value,
            rememberMe : document.getElementById('rememberMe').checked})
    })
    let js = (await answer.json())
    console.log(js)
    let success = js['success'];

    if (success)
        window.location.replace('/');
    else
        alert(js['error'])
}