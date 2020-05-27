import {RenderPosition} from "@consts";

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
    container.insertAdjacentElement(place, element);
};

export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstElementChild;
};

export const replace = (newComponent, oldComponent) => {
    const parentElement = oldComponent.getElement().parentElement;
    const newElement = newComponent.getElement();
    const oldElement = oldComponent.getElement();

    const isExistElements = !!(parentElement && newElement && oldElement);

    if (isExistElements && parentElement.contains(oldElement)) {
        parentElement.replaceChild(newElement, oldElement);
    }
};
