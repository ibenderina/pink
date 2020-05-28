import UploadComponent from "@components/upload/upload";
import {render} from "@utils/render";
import {FILE_TYPES} from "@consts";

export default class UploadController {
    constructor() {
        this._uploadElement = document.querySelector(`.upload`);
        this._changeUploadPhoto = this._changeUploadPhoto.bind(this);
    }

    render() {
        this._uploadComponent = new UploadComponent();
        render(this._uploadElement, this._uploadComponent.getElement());

        this._uploadComponent.setUploadFileHandler(this._changeUploadPhoto);
    }

    _changeUploadPhoto(evt) {
        const uploadFile = evt.target;
        let uploadPreview = this._uploadElement.querySelector(`.upload__photo-image`);
        const file = uploadFile.files[0];
        const fileName = file.name.toLowerCase();

        const matches = FILE_TYPES.some(function (item) {
            return fileName.endsWith(item);
        });

        if (matches) {
            const reader = new FileReader();

            reader.addEventListener(`load`, function () {
                uploadPreview.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    }


}
