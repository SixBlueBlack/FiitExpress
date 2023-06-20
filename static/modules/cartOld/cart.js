// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Div внутри корзины, в который мы добавляем товары
	const cartWrapper =  document.querySelector('.cartOld-wrapper');

	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cartOld')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');
		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};


		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			console.log(window.userData['cart'][productInfo.id])
			window.userData['cart'][productInfo.id] += productInfo.counter;
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			window.userData['cart'][productInfo.id] = productInfo.counter;
			cartWrapper.append(cartItemHTML(productInfo));
		}

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

	}
});
