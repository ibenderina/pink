import AbstractComponent from "@components/abstract";
import {createNavToggleTemplate} from "@components/nav-toggle/nav-toggle-tpl";

export default class NavToggle extends AbstractComponent {
    getTemplate() {
        return createNavToggleTemplate();
    }

    setToggleNavButtonHandler(handler) {
        this.getElement().addEventListener(`click`, handler);
    }

    changeNavToggleImage(isReset) {
        const image = document.querySelector(`.main-line__toggle-image`);
        if (isReset) {
            image.src = `/img/icon-menu-burger.svg`;
            return;
        }
        if (image.src.includes(`burger`)) {
            image.src = `/img/icon-menu-cross.svg`;
        } else {
            image.src = `/img/icon-menu-burger.svg`;
        }
    }
}

