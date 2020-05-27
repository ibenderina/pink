import {RenderPosition} from "@consts";

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
    container.insertAdjacentElement(place, element);
};

export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstElementChild;
};
