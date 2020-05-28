import AbstractComponent from "@components/abstract";
import {createPhotosListTemplate} from "@components/photos/photos-tpl";

export default class PhotosListComponent extends AbstractComponent {
    getTemplate() {
        return createPhotosListTemplate();
    }
}
