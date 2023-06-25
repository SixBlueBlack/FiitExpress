async function ShowLoginPage() {
    document.body.prepend(await Header())
    document.body.append(LoginForm())
    document.body.append(await Footer());
}

ShowLoginPage();