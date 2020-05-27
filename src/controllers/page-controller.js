import {render} from "@utils/render";
import NavComponent from "@components/nav/nav";
import NavToggleComponent from "@components/nav-toggle/nav-toggle";
import {HIDDEN_CLASS} from "@consts";

export default class PageController {
    constructor() {
        this._headerWrapper = document.querySelector(`.header__wrapper`);
        this._headerMainLine = this._headerWrapper.querySelector(`.header__main-line`);

        this._toggleNavigation = this._toggleNavigation.bind(this);
        this._resizeScreenWidth = this._resizeScreenWidth.bind(this);
    }

    render() {
        this._navComponent = new NavComponent();
        this._navToggleComponent = new NavToggleComponent();

        render(this._headerWrapper, this._navComponent.getElement());
        render(this._headerMainLine, this._navToggleComponent.getElement());

        this._navToggleComponent.setToggleNavButtonHandler(this._toggleNavigation);

        this._resizeScreenWidth();

        window.removeEventListener(`resize`, this._resizeScreenWidth);
        window.addEventListener(`resize`, this._resizeScreenWidth);
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
