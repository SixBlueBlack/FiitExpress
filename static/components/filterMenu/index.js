function FilterMenu(){
    let div = document.createElement('div');
    div.classes = 'side-panel'
    div.innerHTML = `
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
    `
    return div;
}