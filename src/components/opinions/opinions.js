import AbstractComponent from "@components/abstract";
import {createOpinionsListTemplate} from "@components/opinions/opinions-tpl";

export default class OpinionsListComponent extends AbstractComponent {
    getTemplate() {
        return createOpinionsListTemplate();
    }
}
