async function Cart(){
    document.body.prepend(await Header());
    let div = document.createElement('div');
    div.className = "cart-wrapper";
    div.innerHTML = `
      <h1>Корзина</h1>
      <div class="cart_project" id="cart_project">
        <div class="cart_shop" id="cart_shop"></div>
      </div>`


    document.getElementById('main-container').append(div);
    document.getElementById('cart_project').append(CartRightBar());

    await ProductUpdate();

    document.body.append(await Footer());

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

}
Cart();

async function ProductUpdate(){
    let userInfo = await getUserInfo();
    let usersProductData;

    if (userInfo['data'].length === 0){
        document.getElementById('cart_shop').append(await CartEmpty())
    }
    if (userInfo['data'].length > 0) {
        for (let i = 0; i < userInfo['data'].length; i++){
           const userData = userInfo['data'][i];
           usersProductData = JSON.parse(userData)["productInfo"];
           document.getElementById('cart_shop').append(await CartItem(usersProductData))
        }
    }

    calcCartPriceAndDelivery();
}

async function getUserInfo(){
    let userInfoPromise = await fetch("/api/get_user_info")
    return userInfoPromise.json()
}