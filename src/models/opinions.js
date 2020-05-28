import Opinion from "@models/opinion";

export default class OpinionsComponent {
    constructor() {
        this._opinionsList = [];
    }

    parse(rawData) {
        this._opinionsList = rawData.map((rawDataItem) => {
            return new Opinion(rawDataItem);
        });
    }

    getOpinions() {
        return this._opinionsList;
    }
}
