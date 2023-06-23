let productInfo;

window.addEventListener('click', function (event) {
	// Div внутри корзины, в который мы добавляем товары

	const cartWrapper = document.querySelector('.cart-wrapper');

	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.item-product');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		productInfo = {
   			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-product__title').innerText,
			price: card.querySelector('.item-product__price ').innerText
		};
		// Проверять если ли уже такой товар в корзине
		// console.log(productInfo);
		// console.log(productInfo.title);

		// console.log(document.querySelector('.cart-wrapper'));
		// console.log(document.querySelector('.cart_project'));
		// console.log(document.querySelector('.cart_shop'));

		// const itemInCart = cartWrapper.querySelector(`[data-title="${productInfo.title}"]`);
		//
		// // Если товар есть в корзине
		// if (itemInCart) {
		// 	console.log(window.userData['cart'][productInfo.id])
		// 	window.userData['cart'][productInfo.id] += productInfo.counter;
		// 	const counterElement = itemInCart.querySelector('[data-counter]');
		// 	counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		// } else {
		// 	window.userData['cart'][productInfo.id] = productInfo.counter;
		// 	cartWrapper.append(cartItemHTML(productInfo));
		// }

//		// Сбрасываем счетчик добавленного товара на "1"
//		card.querySelector('[data-counter]').innerText = '1';
//
//		// Отображение статуса корзины Пустая / Полная
//		toggleCartStatus();
//
// 		// Пересчет общей стоимости товаров в корзине
// 		calcCartPriceAndDelivery();

	}
});

// function GetProductInfo(){
// 	return productInfo;
// }
