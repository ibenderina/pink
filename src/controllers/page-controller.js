import {HIDDEN_CLASS, RenderPosition} from "@consts";
import {render} from "@utils/render";
import NavComponent from "@components/nav/nav";
import NavToggleComponent from "@components/nav-toggle/nav-toggle";
import OpinionsListComponent from "@components/opinions/opinions";
import OpinionComponent from "@components/opinion/opinion";
import PriceListComponent from "@components/price-list/price-list";

export default class PageController {
  constructor(opinionsModel) {
    this._headerWrapper = document.querySelector(`.header__wrapper`);
    this._headerMainLine = this._headerWrapper.querySelector(`.header__main-line`);
    this._opinions = document.querySelector(`.opinions`);
    this._priceListWrapper = document.querySelector(`.price-list__wrapper`);
    this._priceToggle = this._priceListWrapper.querySelectorAll(`.price-list__toggle-radio`);
    this._priceToggleBase = this._priceListWrapper.querySelector(`#price--base`);
    this._priceToggleStandard = this._priceListWrapper.querySelector(`#price--standard`);
    this._priceToggleUnlimited = this._priceListWrapper.querySelector(`#price--unlimited`);

    this._opinionsModel = opinionsModel;

    this._toggleNavigation = this._toggleNavigation.bind(this);
    this._changeNavView = this._changeNavView.bind(this);
    this._changePriceListView = this._changePriceListView.bind(this);
    this._showCurrentPrice = this._showCurrentPrice.bind(this);
    this._toggleOpinions = this._toggleOpinions.bind(this);
  }

  render() {
    this._navComponent = new NavComponent();
    this._navToggleComponent = new NavToggleComponent();
    this._opinionsListComponent = new OpinionsListComponent();
    this._priceListComponent = new PriceListComponent();

    render(this._headerWrapper, this._navComponent.getElement());
    render(this._headerMainLine, this._navToggleComponent.getElement());
    render(this._opinions, this._opinionsListComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(this._priceListWrapper, this._priceListComponent.getElement(), RenderPosition.AFTERBEGIN);

    const opinionsElement = document.querySelector(`.opinions__list`);
    this._opinionsModel.getOpinions().forEach((opinionModel, item) => {
      const opinionComponent = new OpinionComponent(opinionModel);
      render(opinionsElement, opinionComponent.getElement());
      if (item) {
        opinionComponent.hide();
      }
    });

    this._setNextButtonClickHandler(this._toggleOpinions);
    this._setPrevButtonClickHandler(this._toggleOpinions);
    this._setPriceToggleHandler(this._showCurrentPrice);

    this._navToggleComponent.setToggleNavButtonHandler(this._toggleNavigation);

    this._changeNavView();
    this._changePriceListView();

    window.removeEventListener(`resize`, this._changeNavView);
    window.addEventListener(`resize`, this._changeNavView);
    window.removeEventListener(`resize`, this._changePriceListView);
    window.addEventListener(`resize`, this._changePriceListView);
  }

  _changeNavView() {
    if (window.screen.width >= 1000) {
      this._navComponent.show();
    } else {
      this._navComponent.hide();
      this._navToggleComponent.changeNavToggleImage(true);
    }
  }

  _changePriceListView() {
    if (window.screen.width < 500) {
      this._showCurrentPrice();
    } else {
      this._priceListComponent.show();
      const priceTable = this._priceListWrapper.querySelector(`.table`);
      const tableCell = priceTable.querySelectorAll(`.table__cell:not(.table__cell--empty)`);
      tableCell.forEach((item) => {
        item.classList.remove(HIDDEN_CLASS);
      });
    }
  }

  _showCurrentPrice() {
    let current = `base`;

    if (this._priceToggleStandard.checked) {
      current = `standard`;
    }
    if (this._priceToggleUnlimited.checked) {
      current = `unlimited`;
    }
    if (this._priceToggleBase.checked) {
      current = `base`;
    }
     const priceTable = this._priceListWrapper.querySelector(`.table`);

    if (priceTable) {
      const tableCell = priceTable.querySelectorAll(`.table__cell`);
      tableCell.forEach((item) => {
        item.classList.add(HIDDEN_CLASS);
      });
      let currentPrice = priceTable.querySelectorAll(`.table__cell--${current}`);
      currentPrice.forEach((item) => {
        item.classList.remove(HIDDEN_CLASS);
      });
    }
  }

  _toggleNavigation() {
    this._navBlock = this._headerWrapper
      .querySelector(`.nav`)
      .classList.contains(HIDDEN_CLASS);

    this._navToggleComponent.changeNavToggleImage();

    if (this._navBlock) {
      this._navComponent.show();
    } else {
      this._navComponent.hide();
    }
  }

  _toggleOpinions(nextButtonClick) {
    const currentOpinionElement = document.querySelector(`.opinion:not(.${HIDDEN_CLASS})`);

    let nextOpinionElement = currentOpinionElement.previousElementSibling;
    let outOpinionSelector = `.opinion:last-child`;

    if (nextButtonClick) {
      nextOpinionElement = currentOpinionElement.nextElementSibling;
      outOpinionSelector = `.opinion:first-child`;
    }

    currentOpinionElement.classList.add(HIDDEN_CLASS);

    if (nextOpinionElement) {
      nextOpinionElement.classList.remove(HIDDEN_CLASS);
    } else {
      const firstOpinionElement = document.querySelector(outOpinionSelector);
      firstOpinionElement.classList.remove(HIDDEN_CLASS);
    }
  }

  _setNextButtonClickHandler(handler) {
    document.querySelector(`.opinions__button--next`)
    .addEventListener(`click`, () => {
      handler(true);
    });
  }

  _setPrevButtonClickHandler(handler) {
    document.querySelector(`.opinions__button--prev`)
    .addEventListener(`click`, () => {
      handler(false);
    });
  }

  _setPriceToggleHandler(handler) {
    this._priceToggle.forEach((item) => {
      item.addEventListener(`change`, handler);
    })
  }
}
