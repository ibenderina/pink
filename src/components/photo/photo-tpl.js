const createPhotoTemplate = (photo) => {
    return `<li class="photo-list__photo photo">
              <img class="photo__image" src="img/photo-${photo.src}.jpg" width="300" height="300" alt="Фото пользователя">
                <div class="photo__comment comment">
                  <span class="comment__name">${photo.name}
                    <span class="comment__time">(${photo.time} часов назад)</span>
                  </span>
                      <p class="comment__text">${photo.text}
                      </p>
                      <span class="comment__likes-text">НРАВИТСЯ:
                    <span class="comment__likes-count"> ${photo.likes}</span>
                  </span>
                </div>
                <button class="photo__delete-button" type="button" title="Удалить фотографию"></button>
            </li>`
};

export {createPhotoTemplate};

// TODO продумать реализацию очень длинных комментариев
