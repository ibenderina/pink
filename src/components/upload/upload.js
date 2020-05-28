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
}
