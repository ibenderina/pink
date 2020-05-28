import PhotoModel from "@models/photo";

export default class PhotosModel {
    constructor() {
        this._photosList = [];
    }

    parse(rawData) {
        this._photosList = rawData.map((rawDataItem) => {
            return new PhotoModel(rawDataItem);
        });
    }

    getPhotos() {
        return this._photosList;
    }
}
