window.addEventListener('click', async function (event) {

	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter');
		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		}
	}
	const cardBox = event.target.closest('.cart_box');
	let userInfo = await getUserInfo();
	if (event.target.dataset.action === 'trash_bin') {

		const productInfo = {
				id: cardBox.querySelector('.cart_id').innerText,
				imgSrc: cardBox.querySelector('.product-img').getAttribute('src'),
				title: cardBox.querySelector('.cart_content__title').innerText,
				price: cardBox.querySelector('.cart_content__price').innerText
			};

        await deleteUserData(productInfo);
        cardBox.remove();

	    if (userInfo['data'].length === 1){
	        await ProductUpdate();
	    }
	}

	if(event.target.dataset.action === 'checkout' && userInfo['data'].length !== 0){
		alert("Заказ оформлен. Проверьте свою почту.");
		await PurchaseOrderProcessing();
	}

	calcCartPriceAndDelivery();
});

async function deleteUserData(productInfo){
	await fetch("/api/delete_user_info", {
		method: 'POST',
		body: JSON.stringify( {productInfo} )
	});
}

async function getUserInfo(){
    let userInfoPromise = await fetch("/api/get_user_info")
    return userInfoPromise.json()
}

async function PurchaseOrderProcessing(){
    await fetch("/api/send");
}