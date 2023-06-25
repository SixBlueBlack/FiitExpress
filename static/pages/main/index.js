async function ShowMainPage() {
    document.body.prepend(await Header())
    document.getElementById('main-container').append(await IndexBlock());
    document.getElementById('main-container').append(await Footer());

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

    AOS.init();
    // document.getElementById('main-container').append(await Cart());
}

ShowMainPage();
