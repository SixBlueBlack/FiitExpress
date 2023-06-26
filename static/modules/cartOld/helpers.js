function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.cart_content');
	const totalPriceEl = document.querySelector('.total-price');

	let priceTotal = 0;
    let amountProducts = 0;

	priceElements.forEach(function (item) {
		const amountElements = item.querySelector('[data-counter]').innerText;
		const priceProduct = item.querySelector('.cart_content__price').innerText;

        amountProducts += parseInt(amountElements);
		priceTotal += parseInt(priceProduct) * parseInt(amountElements);
	});

	totalPriceEl.innerText = priceTotal;
    cartWrapper.querySelector('.cart_counter').innerText = `Товары, ${amountProducts} шт.`;
}