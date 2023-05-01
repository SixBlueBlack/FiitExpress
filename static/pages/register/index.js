async function ShowRegisterPage() {
    document.body.prepend(await Header())
    document.body.append(RegisterForm())
}

ShowRegisterPage();