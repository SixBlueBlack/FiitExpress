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
            
            <label for="item-category"><b>Категория товара/услуги</b></label>
            <p><select id="genres" name="category-list" required>
                 <option></option>
                 <option>Алгоритмы</option>
                 <option>Программирование</option>
                 <option>Информационные технологии</option>
                 <option>Математика</option>
                 <option>Гуманитарные предметы</option>
                 <option>Физкультура</option>
                 <option>Другое</option>
             </select></p>

            <label for="dscr"><b>Описание товара/услуги</b></label>
            <textarea placeholder="Enter Description" name="description" required></textarea>

            <label class="input-file">
                <span class="input-file-text" type="text"></span>
                <input type="file" name="file">
                <span class="input-file-btn">Выберите файл</span>
            </label>

            <label for="price"><b>Цена (в Рублях)</b></label>
            <input type="text" placeholder="Enter Price" name="price" required>

            <button type="button" class="registerbtn" onclick="SendRequest()">Создать</button>
        </div>

    </form>
    <script>
        $('.input-file input[type=file]').on('change', function(){
            let file = this.files[0];
            $(this).closest('.input-file').find('.input-file-text').html(file.name);
        });
    </script>
    
    `


    return div;
}

async function SendRequest(){
    let input = document.querySelector('input[type="file"]');

    let data = new FormData();
    data.append('file', input.files[0])
    data.append('name', document.getElementsByName('name')[0].value);

    let answer1 = await fetch('/upload_file', {
      method: 'POST',
      body: data
    })
    let js1 = (await answer1.json())

    if (!(js1['success'] === true)) {
        alert(js1['error']);
        return;
    }

    let answer = await fetch('/api/create_product', {
        method: 'POST',
        body: JSON.stringify({
            name : document.getElementsByName('name')[0].value,
            price : document.getElementsByName('price')[0].value,
            category : document.getElementsByName('category-list')[0].value,
            description : document.getElementsByName('description')[0].value,
            picture_path : js1['filename']
        })
    })
    let js = (await answer.json())
    let success = js['success'];

    if (success)
        window.location.replace('/');
    else
        alert(js['error'])
}