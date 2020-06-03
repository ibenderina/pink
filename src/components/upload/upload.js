import AbstractComponent from "@components/abstract";
import {createUploadTemplate} from "@components/upload/upload-tpl";

export default class UploadComponent extends AbstractComponent {
    getTemplate() {
        return createUploadTemplate();
    }

    setUploadFileHandler(handler) {
        this.getElement().querySelector(`.upload__container-button`)
            .addEventListener(`change`, handler);
    }

    setChangeFilterEffectHandler(handler) {
      this.getElement().querySelector(`.effects__list`)
      .addEventListener(`change`, handler);
    }

    setMouseDownPinHandler(handler) {
      this.getElement().querySelector(`.scale-block__pin`)
      .addEventListener(`mousedown`, handler);
    }
}
