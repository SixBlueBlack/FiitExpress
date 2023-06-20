function CreateProductForm(){
    let div = document.createElement('div');
    div.className = "reg-form";
    div.innerHTML = `
        <link rel="stylesheet" href="../static/components/createProductForm/style.css">
        <form>
        <div class="container">
            <h1>Создание товара/услуги</h1>
            <p>Пожалуйста, заполните форму, чтобы создать товар/услугу.</p>
            <hr>

            <label for="item-name"><b>Название товара/услуги</b></label>
            <input type="text" placeholder="Enter Name Item" name="name" required>

            <label for="dscr"><b>Описание товара/услуги</b></label>
            <textarea placeholder="Enter Description" required></textarea>

            <label class="input-file">
                <span class="input-file-text" type="text"></span>
                <input type="file" name="file">
                <span class="input-file-btn">Выберите файл</span>
            </label>

            <label for="price"><b>Цена</b></label>
            <input type="text" placeholder="Enter Price" name="psw-repeat" required>

            <button type="submit" class="registerbtn">Создать</button>
        </div>

    </form>
    <script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
    <script>
        $('.input-file input[type=file]').on('change', function(){
            let file = this.files[0];
            $(this).closest('.input-file').find('.input-file-text').html(file.name);
        });
    </script>`

    return div;
}