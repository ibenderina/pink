const createPriceListTemplate = () => {
  return `<table class="price-list__table table">
            <thead class="table__header">
            <tr class="table__row">
              <th class="table__cell table__cell--empty visually-hidden"></th>
              <th class="table__cell table__cell--headline table__cell--base">
                <span class="table__cell table__cell--base">БАЗА</span>
                <span class="table__cell table__cell--base">1,99 USD</span>
              </th>
              <th class="table__cell table__cell--headline table__cell--standard">
                <span class="table__cell table__cell--standard">СТАНДАРТ</span>
                <span class="table__cell table__cell--standard">3,99 USD</span>
              </th>
              <th class="table__cell table__cell--headline table__cell--unlimited">
                <span class="table__cell table__cell--unlimited">АНЛИМ</span>
                <span class="table__cell table__cell--unlimited">9,99 USD</span>
              </th>
            </tr>
            </thead>
            <tbody class="table__content">
            <tr class="table__row">
              <th class="table__cell table__cell--row-name">Розовый фильтр</th>
              <th class="table__cell table__cell--yes table__cell--pink table__cell--base"></th>
              <th class="table__cell table__cell--yes table__cell--pink table__cell--standard"></th>
              <th class="table__cell table__cell--yes table__cell--pink table__cell--unlimited"></th>
            </tr>
            <tr class="table__row">
              <th class="table__cell table__cell--row-name">Смайлики</th>
              <th class="table__cell table__cell--no table__cell--base"></th>
              <th class="table__cell table__cell--yes table__cell--smiles table__cell--standard"></th>
              <th class="table__cell table__cell--yes table__cell--smiles table__cell--unlimited"></th>
            </tr>
            <tr class="table__row">
              <th class="table__cell table__cell--row-name">Комментарии</th>
              <th class="table__cell table__cell--no table__cell--base"></th>
              <th class="table__cell table__cell--no table__cell--standard"></th>
              <th class="table__cell table__cell--yes table__cell--comments table__cell--unlimited"></th>
            </tr>
            </tbody>
          </table>`
};

export {createPriceListTemplate};
