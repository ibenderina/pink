const createOpinionTemplate = (opinion) => {
    return `<li class="opinions__opinion opinion">
              <p class="opinion__text">«${opinion.text}»</p>
              <button class="opinion__more-button" type="button">...Читать далее</button>
              <span class="opinion__name">${opinion.name}</span>
              <span class="opinion__person">${opinion.person}</span>
            </li>`
};

export {createOpinionTemplate};

// TODO сделать скрытие длинных текстов
// TODO зафиксировать расположение кнопок переключения
