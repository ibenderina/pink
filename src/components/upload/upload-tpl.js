const createUploadTemplate = () => {
  return `<div>
            <div class="upload__container">
              <input type="file"
                     id="upload-file"
                     class="upload__container-button"
                     name="filename"
                     accept="image/*"
                     required>
              <label class="upload__container-label" for="upload-file">
                <img class="upload__container-icon" src="/img/icons/icon-upload.svg" alt="Выбрать файл" width="25">
                <span class="upload__container-text">Выберите файл</span>
              </label>
            </div>
            <form class="upload__form">
              <div class="upload__photo">
                <img class="upload__photo-image" src="/img/photo-2-mobile@1x.jpg" alt="Ваша загруженная фотография" width="300" height="300">
              </div>
              <div class="upload__effects filters">
                <fieldset class="filters__effects effects">
                  <ul class="effects__list">
                    <li class="effects__item">
                     <label class="effects__label effects__label--blur" for="blur"></label>
                     <input class="effects__input visually-hidden" type="radio" name="filter" id="blur" value="blur">
                    </li>
                    <li class="effects__item">
                     <label class="effects__label effects__label--fill" for="fill"></label>
                     <input class="effects__input visually-hidden" type="radio" name="filter" id="fill" value="fill">
                    </li>   
                    <li class="effects__item">
                     <label class="effects__label effects__label--contrast" for="contrast"></label>
                     <input class="effects__input visually-hidden" type="radio" name="filter" id="contrast" value="contrast">
                    </li>                                
                  </ul>
                </fieldset>
                <fieldset class="filters__scale-block  scale-block">
                  <input class="scale-block__value" type="number" name="effect-level" value="20">
                  <div class="scale-block__line">
                    <div class="scale-block__pin" tabindex="0">Кнопка изменения глубины эффекта фотографии</div>
                    <div class="scale-block__depth">Глубина эффекта фотографии</div>
                  </div>
                </fieldset>
              </div>
              <div class="upload__comment">
                <label class="upload__comment-label">
                  <input class="upload__comment-input" type="text" placeholder="Введите имя">
                </label>
                <label class="upload__comment-label">
                  <textarea class="upload__comment-input upload__comment-input--textarea" placeholder="Введите комментарий"></textarea>
                </label>
              </div>
              <div class="upload__buttons buttons">
                <button class="buttons__submit buttons-style">Запостить</button>
                <button class="buttons__cancel buttons-style">Отменить</button>
              </div>
            </form>
          </div>`
};

export {createUploadTemplate};
