import UploadComponent from "@components/upload/upload";
import {render} from "@utils/render";
import {getFilter} from "@utils/common";
import {FILE_TYPES, Filter} from "@consts";

export default class UploadController {
  constructor() {
    this._uploadElement = document.querySelector(`.upload`);

    this._changeUploadPhoto = this._changeUploadPhoto.bind(this);
  }

  render() {
    this._uploadComponent = new UploadComponent();
    render(this._uploadElement, this._uploadComponent.getElement());

    this._uploadComponent.setUploadFileHandler(this._changeUploadPhoto);
    this._uploadComponent.setChangeFilterEffectHandler(this._changeFilterEffect);
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

  _changeFilterEffect() {
    let uploadPreview = document.querySelector(`.upload__photo-image`);
    const currentEffect = document.querySelector(`.effects__input:checked`);

    if (currentEffect && uploadPreview) {
      const filter = Filter[currentEffect.value];

      if (filter) {
        uploadPreview.classList.value = `upload__photo-image effects__preview--${currentEffect.value}`;
        uploadPreview.style.filter = ``;
        uploadPreview.style.filter = getFilter(filter, 10);
      }
    }
  }
}
