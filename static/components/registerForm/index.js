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
    
          <label for="psw"><b>Пароль</b></label>
         <input class="input" type="password" placeholder="Ваш пароль" name="password" required>
        
          <label for="psw"><b>Пароль</b></label>
          <input class="input" type="password" placeholder="Повтор пароля" name="password2" required>
    
          <input class="input" type="checkbox" checked ><label>Запомнить меня</label>
          <hr>
    
        <button type="submit" class="registerbtn">Вход</button>
         <div class="container signin">
           <p>Уже есть аккаунт? <a class="al" href="/register">Вход</a>.</p>
        </div>
      </div>
    
      
    
    
    </form>
    </div>`
    return div
}