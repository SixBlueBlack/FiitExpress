async function ShowMainPage() {
    window.userData = {'cart':{}}
    document.body.prepend(await Header());
    document.getElementById('main-container').append(Filter())
    document.getElementById('main-container').append(await ProductsList());
    await RefreshProductsList('alphaAsc');
    document.body.append(await Footer());
    SetButtonsActivity();


    const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav-btn');
    const navBtnImg = document.querySelector('#nav-btn-img');
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "../../static/img/icons/nav-close.svg";
        } else {
            navBtnImg.src = '../../static/img/icons/nav-open.svg';
        }
    }

    // document.getElementById('side-menu-placeholder').prepend(FilterMenu());
}

ShowMainPage();