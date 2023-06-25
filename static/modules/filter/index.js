function Filter(){
    let div = document.createElement('div');
    div.className = 'sub-category_main';
    div.innerHTML = `
    <div class="sub-category_status">
    <link rel="stylesheet" href="../static/modules/filter/sorted_style.css">
    <link rel="stylesheet" href="../static/modules/filter/filter_style.css">
    <link rel="stylesheet" href="../static/modules/filter/category-filter.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <script src="../static/modules/filter/script.js"></script>


      <div class="sort">
        <div class="sort-item">
          <span class="sort-item_title">Упорядочить:</span>
          <div class="sort-action">
            <div class="sort-action_header">
              <span class="sort-action_current">по названию</span>
              <span class="sort-action_description">A→Я</span>
            </div>

            <script type="text/javascript">
              function sortToggle() {
                $(document).on('click', '.sort-action_header',
                        function () {
                          $('.sort-action').removeClass('sort-action--active');
                          $(this).parent().toggleClass('sort-action--active');
                        })
              }
            </script>
            <div class="sort-action_body">
              <div class="sort-action_item">
                <span class="sort-action_name">по названию</span>
                <span class="sort-action_description">А→Я</span>
              </div>

              <div class="sort-action_item">
                <span class="sort-action_name">по названию</span>
                <span class="sort-action_description">Я→А</span>
              </div>

              <div class="sort-action_item">
                <span class="sort-action_name">по цене</span>
                <span class="sort-action_description">по возрастанию</span>
              </div>

              <div class="sort-action_item">
                <span class="sort-action_name">по цене</span>
                <span class="sort-action_description">по убыванию</span>
              </div>

            </div>
          </div>
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
                          <input type="number" min="0" max="9999" placeholder="0" class="filters-price_input">
                          <span class="filters-price_text">₽</span>
                        </label>
                        <label class="filters-price_label">
                          <span class="filters-price_text">до</span>
                          <input type="number" min="0" max="9999" placeholder="9999" class="filters-price_input">
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
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Алгоритмы</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Программирование</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Информационные технологии</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Математика</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Гуманитарные предметы</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Физкультура</span>
                        </li>
                        <li class="item">
                          <span class="checkbox">
                              <i class="fa-solid fa-check check-icon"></i>
                          </span>
                          <span class="item-text">Другое</span>
                        </li>
                      </ul>
                    </div>

                    <div class="filters_bar">
                        <div class="filters_bar_counter">Нашли 0 товаров</div>
                        <a href="">Показать</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="sort-action_header side-button-1" >

              <label for="side-checkbox">
                <span class="side-b">Фильтры</span>
              </label>

            </div>
          </div>
        </div>

      </div>
    </div>
    `
    return div;
}