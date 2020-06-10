import PhotoModel from "@models/photo";

export default class PhotosModel {
    constructor() {
        this._photosList = [];
        this._observer = [];
    }

    parse(rawData) {
        this._photosList = rawData.map((rawDataItem) => {
            return new PhotoModel(rawDataItem);
        });
    }

    addCallback(callback) {
      this._observer.push(callback);
    }

    add(photoModel) {
      this._photosList.push(photoModel);
      this._observer.forEach((callback) => {
        callback(photoModel);
      })
    }

    getPhotos() {
        return this._photosList;
    }
}
