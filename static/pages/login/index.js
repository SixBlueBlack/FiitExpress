async function ShowLoginPage() {
    document.body.prepend(await Header())
    document.body.append(LoginForm())
}

ShowLoginPage();