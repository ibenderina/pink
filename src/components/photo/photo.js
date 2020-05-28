import AbstractComponent from "@components/abstract";
import {createPhotoTemplate} from "@components/photo/photo-tpl";

export default class PhotoComponent extends AbstractComponent {
    constructor(photoModel) {
        super();
        this.photo = photoModel;
    }
    getTemplate() {
        return createPhotoTemplate(this.photo);
    }

    setPhotoDeleteButtonHandler(handler) {
        this.getElement().querySelector(`.photo__delete-button`)
            .addEventListener(`click`, handler);
    }
}
