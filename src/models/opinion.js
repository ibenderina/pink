export default class Opinion {
    constructor(rawDataItem) {
        this.id = rawDataItem.id;
        this.text = rawDataItem.text;
        this.name = rawDataItem.name;
        this.person = rawDataItem.person;
    }
}
