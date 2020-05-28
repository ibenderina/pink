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
                <img class="upload__container-icon" src="img/icons/icon-upload.svg" alt="Выбрать файл" width="25">
                <span class="upload__container-text">Выберите файл</span>
              </label>
            </div>
            <form class="upload__form">
              <div class="upload__photo">
                <img class="upload__photo-image" src="img/photo-2-mobile@1x.jpg" alt="Ваша загруженная фотография" width="300" height="300">
              </div>
              <div class="upload__filters filters">
                <div class="filters__item-block">
                  <div class="filters__item filters__item--crop">
                    <img class="filters__item-image" src="img/icon-editor-crop.svg" alt="">
                 </div>
                  <div class="filters__item filters__item--fill">
                    <img class="filters__item-image" src="img/icon-editor-fill.svg" alt="">
                  </div>
                  <div class="filters__item filters__item--contrast">
                    <img class="filters__item-image" src="img/icon-editor-contrast.svg" alt="">
                  </div>
                </div>
                <div class="filters__scale-block">
                  <label class="filters__scale-label">
                    <input class="filters__scale-range" type="range" min="0" max="100" step="1" value="50" id="editor">
                  </label>
                </div>
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
