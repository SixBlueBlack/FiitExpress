function LoginForm(){
    let div = document.createElement('div');
    div.innerHTML = `
<form action="/api/login" method="post">
    <table>
        <tr>
            <td>Логин</td>
            <td><input type="text" name="login"></td>
        </tr>
        <tr>
            <td>Пароль</td>
            <td><input type="text" name="password"></td>
        </tr>
        <tr>
            <td><input type="submit" value="Вход"></td>
        </tr>   
</table>
</form>
    `
    return div
}