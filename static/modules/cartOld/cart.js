window.addEventListener('click', async function (event) {
	const cartWrapper = document.querySelector('.cart-wrapper');

	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.item-product');

		const productInfo = {
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-product__title').innerText,
			price: card.querySelector('.item-product__price ').innerText
		};

		await postUserData(productInfo);
	}
});

async function postUserData(productInfo){
	await fetch("/api/update_user_info", {
		method: 'POST',
		body: JSON.stringify( {productInfo} )
	});
}