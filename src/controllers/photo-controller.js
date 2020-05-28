import PhotosListComponent from "@components/photos/photos";
import {remove, render} from "@utils/render";
import PhotoComponent from "@components/photo/photo";

export default class PhotoController {
    constructor(photosModel) {
        this._photosBlock = document.querySelector(`.photos-block`);
        this._photosModel = photosModel;
    }

    render() {
        this._photosListComponent = new PhotosListComponent();
        render(this._photosBlock, this._photosListComponent.getElement());

        const photosElement = this._photosListComponent.getElement();
        this._photosModel.getPhotos().forEach((photoModel) => {
            const photoComponent = new PhotoComponent(photoModel);
            photoComponent.setPhotoDeleteButtonHandler(() => {
                remove(photoComponent);
            });
            render(photosElement, photoComponent.getElement());
        });
    }
}
