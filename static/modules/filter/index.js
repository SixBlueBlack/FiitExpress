function Filter(){
    let div = document.createElement('div');
    div.className = 'sub-category_main';
    div.innerHTML = `
    <div class="sub-category_status">
    <link rel="stylesheet" href="../static/modules/filter/sorted_style.css">
    <link rel="stylesheet" href="../static/modules/filter/filter_style.css">
    <link rel="stylesheet" href="../static/modules/filter/category-filter.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet">
    <script src="../static/modules/filter/script.js"></script>


      <div class="sort">
        <div class="sort-item select-menu sort-action">
        <div class="select-btn">
          <span class="sBtn-text">Упорядочить по</span>
          <i class="bx bx-chevron-down btn-text-bx"></i>
        </div>

        <ul class="options">
          <li class="option">
                <span class="option-text">
                    <span class="sort-action_name">по названию</span>
                    <span class="sort-action_description">А→Я</span>
                </span>
          </li>
          <li class="option">
                <span class="option-text">
                    <span class="sort-action_name">по названию</span>
                    <span class="sort-action_description">Я→А</span>
                </span>
          </li>
          <li class="option">
                <span class="option-text">
                    <span class="sort-action_name">по цене</span>
                    <span class="sort-action_description">по возрастанию</span>
                </span>
          </li>
          <li class="option">
                <span class="option-text">
                    <span class="sort-action_name">по цене</span>
                    <span class="sort-action_description">по убыванию</span>
                </span>
          </li>
        </ul>
      </div>


        <div class="sort-item">
          <div class="sort-action">

            <input type="checkbox" id="side-checkbox" />
            <div class="side-panel">
              <label class="side-button-2" for="side-checkbox">+</label>
              <div class="side-title">Фильтры</div>

              <div class="container">
                <div class="products-content grid-container">
                  <div class="filters">

                    <div class="filters_item filters-price">
                      <h3 class="filters_title">Цена</h3>

                      <div class="filters-price_inputs">
                        <label class="filters-price_label">
                          <span class="filters-price_text">от</span>
                          <input type="number" min="0" max="9999" placeholder="0" class="filters-price_input" id="lower_bound">
                          <span class="filters-price_text">₽</span>
                        </label>
                        <label class="filters-price_label">
                          <span class="filters-price_text">до</span>
                          <input type="number" min="0" max="9999" placeholder="9999" class="filters-price_input" id="upper_bound">
                          <span class="filters-price_text">₽</span>
                        </label>
                      </div>

                    </div>

                    <div class="filters_item filters-product">

                      <div class="select-btn" id="category-btn">
                        <span class="btn-text">Категории</span>
                        <span class="arrow-dwn">
                          <i class="fa-solid fa-chevron-down"></i>
                        </span>
                      </div>

                      <ul class="list-items">
                        <li class="item" id="compSci">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Компьютерные науки</span>
                        </li>
                        <li class="item" id="prog">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Программирование</span>
                        </li>
                        <li class="item" id="math">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Математика</span>
                        </li>
                        <li class="item" id="etc">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Прочие предметы</span>
                        </li>
                       
                      </ul>
                    </div>

                    <div class="filters_bar">
                        <div class="filters_bar_counter">Нашли 0 товаров</div>
                        <a onclick="ApplyFilters()">Показать</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="sort-action_header side-button-1" >

            <label for="side-checkbox">
              <span class="select-btn side-b">Фильтры</span>
            </label>

          </div>
          </div>
        </div>

      </div>
    </div>
    `
    return div;
}

function ApplyFilters(){
    let categories = [];
    let map = {
        'compSci': "Компьютерные науки",
        'math' : "Математика",
        'etc' : "Прочие предметы",
        'prog' : "Программирование"
    }
    for (let e of window.select_items){
        categories.push(map[e])
    }
    RefreshProductsList('alphaAsc', categories.join(','), document.getElementById('lower_bound').value, document.getElementById('upper_bound').value)
}