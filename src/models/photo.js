export default class PhotoModel {
    constructor(rawDataItem) {
        this.id = rawDataItem.id;
        this.src = rawDataItem.src;
        this.name = rawDataItem.name;
        this.time = rawDataItem.time;
        this.text = rawDataItem.text;
        this.likes = rawDataItem.likes;
    }
}
