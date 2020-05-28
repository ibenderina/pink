import {HIDDEN_CLASS, RenderPosition} from "@consts";
import {render} from "@utils/render";
import NavComponent from "@components/nav/nav";
import NavToggleComponent from "@components/nav-toggle/nav-toggle";
import OpinionsListComponent from "@components/opinions/opinions";
import OpinionComponent from "@components/opinion/opinion";

export default class PageController {
    constructor(opinionsModel) {
        this._headerWrapper = document.querySelector(`.header__wrapper`);
        this._headerMainLine = this._headerWrapper.querySelector(`.header__main-line`);
        this._opinions = document.querySelector(`.opinions`);
        this._opinionsModel = opinionsModel;

        this._toggleNavigation = this._toggleNavigation.bind(this);
        this._resizeScreenWidth = this._resizeScreenWidth.bind(this);
    }

    render() {
        this._navComponent = new NavComponent();
        this._navToggleComponent = new NavToggleComponent();
        this._opinionsListComponent = new OpinionsListComponent();

        render(this._headerWrapper, this._navComponent.getElement());
        render(this._headerMainLine, this._navToggleComponent.getElement());
        render(this._opinions, this._opinionsListComponent.getElement(), RenderPosition.AFTERBEGIN);

        const opinionsElement = document.querySelector(`.opinions__list`);
        this._opinionsModel.getOpinions().forEach((opinionModel, i) => {
            const opinionComponent = new OpinionComponent(opinionModel);
            render(opinionsElement, opinionComponent.getElement());
            if (i) {
                opinionComponent.hide();
            }
        });

        this._setNextButtonClickHandler(this._toggleOpinions);
        this._setPrevButtonClickHandler(this._toggleOpinions);

        this._navToggleComponent.setToggleNavButtonHandler(this._toggleNavigation);

        this._resizeScreenWidth();

        window.removeEventListener(`resize`, this._resizeScreenWidth);
        window.addEventListener(`resize`, this._resizeScreenWidth);
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

    _resizeScreenWidth() {
        if (window.screen.width >= 1000) {
            this._navComponent.show();
        } else {
            this._navComponent.hide();
            this._navToggleComponent.changeNavToggleImage(true);
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
}
