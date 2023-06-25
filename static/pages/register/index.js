async function ShowRegisterPage() {
    document.body.prepend(await Header())
    document.body.append(RegisterForm())
    document.body.append(await Footer());
}

ShowRegisterPage();