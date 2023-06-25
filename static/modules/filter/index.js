function Filter(){
    let div = document.createElement('div');
    div.className = 'sub-category_main';
    div.innerHTML = `
    <div class="sub-category_status">
    <link rel="stylesheet" href="../static/modules/filter/sorted_style.css">
    <link rel="stylesheet" href="../static/modules/filter/filter_style.css">
    <link rel="stylesheet" href="../static/modules/filter/mobiscroll.javascript.min.css">


      <div class="sort">
        <div class="sort-item">
          <span class="sort-item_title">Упорядочить:</span>
          <div class="sort-action">
            <div class="sort-action_header">
              <span class="sort-action_current">по популярности</span>
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
              <div class="sort-action_item" onclick="RefreshProductsList('alphaAsc')">
                <span class="sort-action_name">по алфавиту</span>
                <span class="sort-action_description">по возрастанию</span>
              </div>
              
              <div class="sort-action_item" onclick="RefreshProductsList('alphaDesc')">
                <span class="sort-action_name">по алфавиту</span>
                <span class="sort-action_description">по убыванию</span>
              </div>

              <div class="sort-action_item" onclick="RefreshProductsList('priceAsc')">
                <span class="sort-action_name">по цене</span>
                <span class="sort-action_description">по возрастанию</span>
              </div>

              <div class="sort-action_item" onclick="RefreshProductsList('priceDesc')">
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
                      <h3 class="filters_title">Предметы</h3>

                      <label>
                        <input mbsc-input id="my-input" data-dropdown="true" data-tags="true" />
                      </label>
                      <select id="multiple-select" multiple>
                        <option value="1">Алгоритмы и структуры данных</option>
                        <option value="2">Математический анализ</option>
                        <option value="3">Теория вероятностей</option>
                      </select>

                      <script type="text/javascript">
                        mobiscroll.select('#multiple-select', {
                          inputElement: document.getElementById('my-input'),
                          touchUi: false
                        });
                      </script>

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