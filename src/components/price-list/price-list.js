import AbstractComponent from "@components/abstract";
import {createPriceListTemplate} from "@components/price-list/price-list-tpl";

export default class PriceListComponent extends AbstractComponent {
  getTemplate() {
    return createPriceListTemplate();
  }
}
