import AbstractComponent from "@components/abstract";
import {createNavTemplate} from "@components/nav/nav-tpl";

export default class Nav extends AbstractComponent {
    getTemplate() {
        return createNavTemplate();
    }
}
