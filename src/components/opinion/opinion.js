import AbstractComponent from "@components/abstract";
import {createOpinionTemplate} from "@components/opinion/opinion-tpl";

export default class Opinion extends AbstractComponent {
    constructor(opinionModel) {
        super();
        this.opinion = opinionModel;
    }
    getTemplate() {
        return createOpinionTemplate(this.opinion);
    }
}
