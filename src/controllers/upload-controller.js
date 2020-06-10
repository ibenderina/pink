import UploadComponent from "@components/upload/upload";
import {render} from "@utils/render";
import {getFilter} from "@utils/common";
import {FILE_TYPES, Filter} from "@consts";
import PhotoModel from "@models/photo";

export default class UploadController {
  constructor(photosModel) {
    this._uploadElement = document.querySelector(`.upload`);
    this._changeUploadPhoto = this._changeUploadPhoto.bind(this);
    this._setEffectLevelCoords = this._setEffectLevelCoords.bind(this);
    this._effectLevelPinChanger = this._effectLevelPinChanger.bind(this);
    this._changeEffect = this._changeEffect.bind(this);
    this._onSetupSubmitClick = this._onSetupSubmitClick.bind(this);

    this.photosModel = photosModel;
  }

  render() {
    this._uploadComponent = new UploadComponent();
    render(this._uploadElement, this._uploadComponent.getElement());

    this._uploadComponent.setUploadFileHandler(this._changeUploadPhoto);
    this._uploadComponent.setChangeFilterEffectHandler(this._changeEffect);
    this._uploadComponent.setMouseDownPinHandler(this._effectLevelPinChanger);
    this._uploadComponent.setSubmitHandler(this._onSetupSubmitClick);
  }

  _changeUploadPhoto(evt) {
    const uploadFile = evt.target;
    let uploadPreview = this._uploadComponent.uploadPreview;
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

  _setFilterSaturation(coords) {
    const currentEffect = document.querySelector(`.effects__input:checked`);
    const scaleBlockLine = this._uploadComponent.scaleBlockLine;
    let uploadPreview = this._uploadComponent.uploadPreview;

    if (currentEffect && uploadPreview) {
      const filter = Filter[currentEffect.value];

      if (filter) {
        const levelPart = coords / scaleBlockLine.clientWidth;
        uploadPreview.classList.value = `upload__photo-image effects__preview--${currentEffect.value}`;
        uploadPreview.style.filter = ``;
        uploadPreview.style.filter = getFilter(filter, levelPart);
      }
    }
  }

  _setEffectLevelCoords(coords) {
    const effectLevelPin = this._uploadComponent.scaleBlockPin;
    const effectLevelLine = this._uploadComponent.scaleBlockLine;
    const effectLevelDepth = this._uploadComponent.scaleBlockDepth;

    if (coords >= 0 && coords <= effectLevelLine.clientWidth) {
      effectLevelPin.style.left = coords + 'px';
      effectLevelDepth.style.width = coords + 'px';
    }

    this._setFilterSaturation(coords);
  }

  _changeEffect(evt) {
    let uploadPreview = document.querySelector(`.upload__photo-image`);
    const effectLevelLine = this._uploadComponent.scaleBlockLine;

    const effect = evt.target.value;

    uploadPreview.classList.value = `upload__photo-image effects__preview--${effect.value}`;
    uploadPreview.style.filter = '';

    this._setEffectLevelCoords(effectLevelLine.clientWidth);
  }

  _effectLevelPinChanger(evt) {
    evt.preventDefault();

    let startCoords = evt.clientX;
    let trigger = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      const effectLevelPin = this._uploadComponent.scaleBlockPin;
      trigger = true;
      const shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      const coords = (effectLevelPin.offsetLeft - shift);

      this._setEffectLevelCoords(coords);
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      const effectLevelPin = this._uploadComponent.scaleBlockPin;

      if (trigger) {
        const onPreventDefaultClick = function (clickEvt) {
          clickEvt.preventDefault();
          effectLevelPin.removeEventListener('click', onPreventDefaultClick);
        };
        effectLevelPin.addEventListener('click', onPreventDefaultClick);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  _onSetupSubmitClick(evt) {
    const photosElement = document.querySelector(`photo-list`);
    const uploadPhoto = document.querySelector(`upload__photo-image`);
    const uploadInputName = document.querySelector(`upload__comment-input--name`);
    const uploadInputText = document.querySelector(`upload__comment-input--textarea`);

    evt.preventDefault();
    console.log(567);

    const photoModel = new PhotoModel({
      src: `5`,
      name: `test`,
      time: `20`,
      text: `test`,
      likes: 0
    });

    this.photosModel.add(photoModel);
  };
}
