import AbstractComponent from "@components/abstract";
import {createUploadTemplate} from "@components/upload/upload-tpl";

export default class UploadComponent extends AbstractComponent {
  getTemplate() {
    return createUploadTemplate();
  }

  getElement() {
    this.element = super.getElement();
    this.scaleBlockPin = this.element.querySelector(`.scale-block__pin`);
    this.scaleBlockLine = this.element.querySelector(`.scale-block__line`);
    this.scaleBlockDepth = this.element.querySelector(`.scale-block__depth`);
    this.uploadPreview = this.element.querySelector(`.upload__photo-image`);
    return this.element;
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
